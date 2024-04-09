const axios = require('axios');
const fs = require('fs');

const fetchEnergy = async (token) => {
  try {
    const response = await axios.get(
      'https://www.mintchain.io/api/tree/energy-list',
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get(
      'https://www.mintchain.io/api/tree/user-info',
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const claimEnergy = async (token, uid, amount, includes, type, id) => {
  try {
    const response = await axios.post(
      'https://www.mintchain.io/api/tree/claim',
      {
        uid: uid,
        amount: amount,
        includes: includes,
        type: type,
        freeze: false,
        id: id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response.data.msg);
  } catch (error) {
    throw error;
  }
};

const injectEnergy = async (token, energy, address) => {
  try {
    const response = await axios.post(
      'https://www.mintchain.io/api/tree/inject',
      {
        energy: energy,
        address: address,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTokenList = () => {
  const jsonFileContent = fs.readFileSync('accounts.json');
  return JSON.parse(jsonFileContent);
};

module.exports = {
  fetchEnergy,
  fetchUserInfo,
  claimEnergy,
  injectEnergy,
  getTokenList,
};
