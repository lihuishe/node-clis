#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function cat() {
  let file = process.argv[2]
  if(file == undefined || !(await fs.stat(file)).isFile()) {
    process.stdout.write('incorrect or no file specified. please pass in the file as the first argument \n')
    return
  }

  process.stdout.write(await fs.readFile(file, 'utf8'))
}

cat()
