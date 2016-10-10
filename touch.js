#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise
let argv = require('yargs').argv

async function touch() {
  let file = argv._[0]
  if(file == undefined) {
    process.stdout.write('no filename specified. please specify a filename for touch \n')
    return
  }

  await fs.utimes(file, new Date(),new Date())
}

touch()