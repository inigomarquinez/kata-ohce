const readline = require('readline');
const chalk = require('chalk');

const isPalindrome = require('./isPalindrome');
const customPrint = require('./customPrint');

const userLoop = (name, colour = false) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: customPrint({ text: 'ohce > ', colour: '#046731', colourBoolean: colour }),
  });

  rl.prompt();

  rl.on('line', line => {
    switch (line.trim()) {
    case 'Stop!':
      console.log(customPrint({ text: `Adios ${name}`, colour: '#97B500', colourBoolean: colour })); // eslint-disable-line no-console
      process.exit(0);
      break;

    default: {
      const msg = line
        .trim()
        .split('')
        .reverse()
        .join('');

      console.log(colour ? chalk.hex('#13C4AC')(msg) : msg); // eslint-disable-line no-console
      if (isPalindrome(line)) {
        console.log(customPrint({ text: '¡Bonita palabra!', colour: '#3E95F3', colourBoolean: colour })); // eslint-disable-line no-console
      }
    }
    }
    rl.prompt();
  }).on('close', () => {
    console.log(customPrint({ text: `Adios ${name}`, colour: '#97B500', colourBoolean: colour })); // eslint-disable-line no-console
    process.exit(0);
  });
};

module.exports = userLoop;
