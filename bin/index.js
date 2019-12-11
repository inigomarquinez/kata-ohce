#!/usr/bin/env node

const { exec } = require('child_process');

const yargs = require("yargs");
const welcome = require('../lib/welcome');
const userLoop = require('../lib/userLoop');

yargs
  .command({
    command: '$0 <name>',
    desc: 'ohce is a console application that echoes the reverse of what you input through the console',
    handler: argv => {
      welcome(argv.name);
      if (!argv.test)
        userLoop(argv.name);
      else
        exec('npm t', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(stdout);
        console.error(stderr);
      });
    }
  })
  .option('t', {
    alias: 'test',
    default: true,
    defaultDescription: 'Launch the tests',
    describe: 'Exec tests'
  })
  .help()
  .argv
