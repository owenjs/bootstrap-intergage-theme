const fs = require('fs');
const path = require('path');

const init = file => {
  let importRegex = /@import *["'](.+)["']/g;
  let importPaths = [];
  [...file.matchAll(importRegex)].forEach(match => {
    importPaths.push(match[1]);
  });
  //importPaths = importPaths.forEach(match => (match[1]));
  console.log(importPaths);
}

const getImportFiles = () => {

};

try {
  const data = fs.readFileSync(path.join(__dirname, 'scss', 'bootstrap.scss'), 'utf8');

  init(data);
} catch (err) {
  console.error(err)
}