const readline = require('readline');
const chalk = require('chalk');

const isPalindrome = require('./isPalindrome');

const userLoop = (name, colour = false) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: colour ? chalk.hex('#046731')('ohce > ') : 'ohce > '
  });

  rl.prompt();

  rl.on('line', line => {
    switch (line.trim()) {
      case 'Stop!':
        console.log(colour ? chalk.green(`Adios ${name}`) : `Adios ${name}`);
        process.exit(0);

      default:
        let msg = line.trim().split("").reverse().join("");
        console.log(colour ? chalk.hex('#13C4AC')(msg) : msg);
        if (isPalindrome(line)) {
          console.log(colour ? chalk.blue('¡Bonita palabra!'): '¡Bonita palabra!');
        }
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log(colour ? chalk.green(`Adios ${name}`) : `Adios ${name}`);
    process.exit(0);
  });
};

module.exports = userLoop;
