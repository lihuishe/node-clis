#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function echo() {
  let ret = process.argv[2] == undefined ? "" : process.argv[2]
  process.stdout.write(ret + '\n')
}

echo()
