const concat = require('concat-stream');

const { spawn } = require('child_process');

function execute(command, args = [], inputs = [], opts = {}) {
  const commandExecuted = spawn(command, args);
  commandExecuted.stdin.setEncoding('utf-8');

  const { timeout = 100 } = opts;

  let currentInputTimeout;

  const loop = inputs => {
    if (!inputs.length) {
      commandExecuted.stdin.end();
      return;
    }

    currentInputTimeout = setTimeout(() => {
      commandExecuted.stdin.write(inputs[0]);
      loop(inputs.slice(1));
    }, timeout);
  };

  return new Promise((resolve, reject) => {
    commandExecuted.stderr.once('data', err => {
      commandExecuted.stdin.end();

      if (currentInputTimeout) {
        clearTimeout(currentInputTimeout);
        inputs = [];
      }
      reject(err.toString())
    });

    commandExecuted.on('error', reject);

    loop(inputs);

    commandExecuted.stdout.pipe(
      concat(result => {
        resolve(result.toString());
      })
    );
  })
}


module.exports = {
  execute,
  DOWN: '\x1B\x5B\x42',
  UP: '\x1B\x5B\x41',
  ENTER: '\x0D',
  SPACE: '\x20'
};
