#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function mkdir() {
  let path = process.argv[2]
  if(path == undefined) {
    process.stdout.write('no path specified. please specify a path to create a directory with \n')
    return
  }

  await fs.mkdir(path)
}

mkdir()
