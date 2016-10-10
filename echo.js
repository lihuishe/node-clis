#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise
let argv = require('yargs').argv

async function echo() {
    process.stdout.write(argv._ + '\n')
}

echo()
