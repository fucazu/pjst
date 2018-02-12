const fs = require('fs')
const { resolve, join } = require('path')
const shell = require('shelljs')
const indexFile = 'index.js'

const createFolder = folder => fs.mkdirSync(folder)
const createFile = filePath => fs.writeFileSync(filePath, '')
const copyFiles = distFolderPath => fs.copyFileSync(resolve(join(__dirname, './gitignore')), resolve(join(distFolderPath, './.gitignore')))

module.exports = folder => {
  folder = resolve(folder)

  !fs.existsSync(folder) && createFolder(folder)

  !fs.existsSync(join(folder, indexFile)) && createFile(join(folder, indexFile))

  shell.cd(folder)
  shell.exec('npm init -y')
  shell.exec('git init')

  copyFiles(folder)
  console.log('All done! Have fun :D')
}
