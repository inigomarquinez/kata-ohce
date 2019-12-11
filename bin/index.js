#!/usr/bin/env node

const yargs = require('yargs');
const welcome = require('../lib/welcome');
const userLoop = require('../lib/userLoop');

yargs
  .command({
    command: '$0 <name>',
    desc: 'ohce is a console application that echoes the reverse of what you input through the console',
    handler: argv => {
      console.log('argv', argv)
      welcome(argv.name, argv.colour);
      userLoop(argv.name, argv.colour);
    }
  })
  .option('c', {
    alias: 'colour',
    describe: 'Exec tests'
  })
  .help()
  .argv
