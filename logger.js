const colors = require('colors');

const successLog = (msg) => {
  try {
    const formattedMsg = colors.green(`* ${msg} *`);
    console.log(`${formattedMsg}`);
  } catch (error) {
    console.log(error + ' failed success log');
  }
};

const failedLog = (msg) => {
  try {
    const formattedMsg = colors.red(`* ${msg} *`);
    console.log(`${formattedMsg}`);
  } catch (error) {
    console.log(error + ' failed failed log');
  }
};

const infoLog = (msg) => {
  try {
    const formattedMsg = colors.magenta(`- ${msg}`);
    console.log(`${formattedMsg}`);
  } catch (error) {
    console.log(error + ' failed info log');
  }
};

module.exports = {
  successLog,
  failedLog,
  infoLog,
};
