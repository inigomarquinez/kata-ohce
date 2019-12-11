const readline = require('readline');

const isPalindrome = require('./isPalindrome');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'ohce> '
});

const userLoop = name => {
  rl.prompt();

  rl.on('line', line => {
    switch (line.trim()) {
      case 'Stop!':
        console.log(`Adios ${name}`);
        process.exit(0);

      default:
        let msg = line.trim().split("").reverse().join("");
        console.log(msg);
        if (isPalindrome(line)) {
          console.log('¡Bonita palabra!');
        }
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log(`Adios ${name}`);
    process.exit(0);
  });
};

module.exports = userLoop;