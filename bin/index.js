#!/usr/bin/env node

const welcome = require('./welcome');

const ohce = () => {
  const [bash, command, ...args] = process.argv;

  if (args.length === 0) {
    console.error('Incorrect use. TODO: Show ohce help');
    return -1;
  }

  welcome(args[0]);
}

ohce();

module.exports = ohce;
