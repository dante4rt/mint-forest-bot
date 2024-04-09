const { successLog, failedLog, infoLog } = require('./logger');
const {
  fetchEnergy,
  fetchUserInfo,
  claimEnergy,
  injectEnergy,
  getTokenList,
} = require('./api');
const colors = require('colors');

const main = async () => {
  try {
    process.stdout.write('\x1Bc');
    console.log(colors.cyan('========================================'));
    console.log(colors.cyan('=    MintChain Claimer and Injector    ='));
    console.log(colors.cyan('=           Created by Dante4rt        ='));
    console.log(colors.cyan('========================================'));
    console.log();

    const tokenList = getTokenList();

    for (let i = 0; i < tokenList.length; i++) {
      console.log(
        colors.yellow(`Processing ACCOUNT ${i + 1} of ${tokenList.length}`)
      );
      console.log();

      const token = tokenList[i];
      const userInfo = await fetchUserInfo(token);
      const { id, address, treeId, status, energy } = userInfo.result;

      successLog('Account information retrieved successfully');
      infoLog(`ID      : ${id}`);
      infoLog(`Address : ${address}`);
      infoLog(`Tree ID : ${treeId}`);
      infoLog(`Status  : ${status}`);
      infoLog(`Energy  : ${energy}`);

      const energyList = await fetchEnergy(token);
      let totalEnergy;
      let energyClaimed;

      successLog('Energy list retrieved successfully');
      for (const energy of energyList.result) {
        infoLog(`Amount : ${energy.amount}`);
        infoLog(`Type   : ${energy.type}`);
        if (energy.freeze == true) {
          infoLog('Skipping claiming energy because it is frozen');
        } else {
          await claimEnergy(
            token,
            energy.uid,
            energy.amount,
            energy.includes,
            energy.type,
            energy.id
          );
          energyClaimed = energy.amount;
          successLog(
            `* Claimed ${energy.amount} energy for wallet ${address} *`
          );
        }
      }

      totalEnergy = energy + energyClaimed;
      if (totalEnergy > 0) {
        const response = await injectEnergy(token, totalEnergy, address);
        if (response.msg == 'ok') {
          successLog(
            `* Injected ${totalEnergy} energy into ${address}'s tree *`
          );
        }
      } else {
        infoLog(`Skipping injection for wallet ${address}`);
      }

      console.log(colors.cyan('========================================'));
      console.log();
    }
  } catch (error) {
    failedLog(error.message);
  }
};

module.exports = main;
