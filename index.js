module.exports = folder => {
  const fs = require('fs')
  const { resolve, join } = require('path')
  const { exec, spawn } = require('child_process')
  const shell = require('shelljs');
  folder = resolve(folder)

  const indexFile = 'index.js'
  console.log('folder ', folder)

  const createFolder = folder => {
    console.log('vai criar')
    fs.mkdirSync(folder)
  }
  const createFile = filePath => {
    console.log('vai criar o arquivo')
    fs.writeFileSync(filePath)
  }

  const copyFiles = distFolderPath => {
    fs.copyFileSync(resolve(join(__dirname,'./gitignore')), resolve(join(distFolderPath, './.gitignore')))
  }

  !fs.existsSync(folder) && createFolder(folder)

  !fs.existsSync(join(folder, indexFile)) && createFile(join(folder, indexFile))
  console.log('pronto')

  shell.cd(folder)
  shell.exec('npm init -y')
  shell.exec('git init')

  copyFiles(folder)

  process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });
}