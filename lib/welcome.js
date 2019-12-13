const customPrint = require('./customPrint');

const welcome = (name, colour = false) => {
  const now = new Date().getHours();
  let prefix = '';
  if (now > 20 && now < 6) {
    prefix = 'Buenas noches';
  } else if (now > 6 && now < 12) {
    prefix = 'Buenos días';
  } else {
    prefix = 'Buenas tardes';
  }
  console.log(customPrint({ text: `¡${prefix} ${name}!`, colour: '#97B500', colourBoolean: colour }));
};

module.exports = welcome;
