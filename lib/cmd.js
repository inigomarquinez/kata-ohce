const concat = require('concat-stream');

const { spawn } = require('child_process');

function execute(command, args = []) {
  const commandExecuted = spawn(command, args);
  commandExecuted.stdin.setEncoding('utf-8');
  return new Promise((resolve, reject) => {
    commandExecuted.stderr.once('data', err => reject(err.toString()));
    commandExecuted.on('error', reject);
    commandExecuted.stdout.pipe(
      concat(result => {
        resolve(result.toString());
      })
    );
  })
}


module.exports = { execute };
