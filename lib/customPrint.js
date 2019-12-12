const chalk = require('chalk');
const customPrint = ({ text, colour, colourBoolean }) =>
  (colourBoolean ? chalk.hex(colour)(text) : text);


module.exports = customPrint;
