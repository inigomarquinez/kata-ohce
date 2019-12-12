#!/usr/bin/env node

const yargonaut = require('yargonaut');
const yargs = require('yargs');
const chalk = require('chalk');

const welcome = require('../lib/welcome');
const userLoop = require('../lib/userLoop');


yargonaut
  .style('blue')
  .helpStyle('green')
  .errorsStyle('red.bold')
  .help('Chunky');

yargs // eslint-disable-line no-unused-expressions
  .command({
    command: '$0 <name>',
    desc: chalk.hex('#13C4AC')('ohce is a console application that echoes the reverse of what you input through the console'),
    handler: argv => {
      welcome(argv.name, argv.colour);
      userLoop(argv.name, argv.colour);
    },
  })
  .option('c', {
    alias: 'colour',
    type: 'boolean',
    describe: chalk.hex('#C1137C')('CLI add colours'),
  })
  .option('version', {
    describe: chalk.hex('#C1137C')('Show version number'),
  })
  .help()
  .option('help', {
    describe: chalk.hex('#C1137C')('Show help'),
  })
  .argv;
