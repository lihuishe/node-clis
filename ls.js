#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise
let path = require('path')

async function ls(rootDir, recur) {
  if((await fs.stat(rootDir)).isFile()){
    return [rootDir]
  }

  let fileNames = await fs.readdir(rootDir)
  let lsps = []
  for(let file of fileNames){
    let nextPath = path.join(rootDir, file)

    if(recur == false && (await fs.stat(nextPath)).isDirectory()){
      // skip
    } else {
      let lsp = ls(path.join(rootDir, file), recur)
      lsps.push(lsp)
    }
  }

  // flatten
  return [].concat.apply([], await Promise.all(lsps))
}

async function main() {
  var recursive = false;
  let dir = process.argv[2] == undefined ? __dirname : process.argv[2]

  process.argv.forEach(function (val, index, array) {
    if(val == '-R' || val == '-r'){
      recursive = true;
    }
  });

  let paths = await ls(dir, recursive)
  console.log(paths.join('\n'))
}

main()
