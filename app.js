// MODULES //
// const { sayHello } = require('./helpers/sayHello.helper');
// sayHello();

// GLOBAL VARIABLES //
//__dirname, __filename, process.cwd();
// console.log('from app.js');
//
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());
// CWD - current working directory

// PATH
// const path = require('path');
// C:\Users\l4pukhh\WebstormProjects\dec-2022
// Users/l4pukhh/WebstormProjects/dec-2022/helpers
// const joinedPath = path.join(__dirname, 'folder', 'folder2', 'text.txt');
// const normalizedPath = path.normalize('////test////test2////////test3///test4');
// const resolvedPath = path.resolve('folder', 'folder2', 'text.txt');
//
// console.log(joinedPath)
// console.log(normalizedPath);
// console.log(resolvedPath);

// OS
// const os = require('os');
// const { exec } = require('child_process');
//
// // x64 x86 = x32
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.version());

//
const path = require('path');
const fs =require('fs');


//файли

fs.writeFile(path.join(__dirname, 'node app.js' , 'node1file'),'node1file hii',(err)=>{
  if (err) throw new Error(err.message);
})
fs.writeFile(path.join(__dirname, 'node app.js' , 'node2file.obj'),'node1file hii',(err)=>{
  if (err) throw new Error(err.message);
})
fs.writeFile(path.join(__dirname, 'node app.js' , 'node3file.obj'),'node1file hii',(err)=>{
  if (err) throw new Error(err.message);
})
fs.writeFile(path.join(__dirname, 'node app.js' , 'node4file.obj'),'node1file hii',(err)=>{
  if (err) throw new Error(err.message);
})
fs.writeFile(path.join(__dirname, 'node app.js' , 'node5file.obj'),'node1file hii',(err)=>{
  if (err) throw new Error(err.message);
})


//папки

fs.mkdir(path.join(__dirname, 'node app.js' , 'szooo') , (err)=>{
  if (err) throw new Error(err.message);
})
fs.mkdir(path.join(__dirname, 'node app.js' , 'szooo1') , (err)=>{
  if (err) throw new Error(err.message);
})
fs.mkdir(path.join(__dirname, 'node app.js' , 'szooo2') , (err)=>{
  if (err) throw new Error(err.message);
})
fs.mkdir(path.join(__dirname, 'node app.js' , 'szooo3') , (err)=>{
  if (err) throw new Error(err.message);
})
fs.mkdir(path.join(__dirname, 'node app.js' , 'szooo4') , (err)=>{
  if (err) throw new Error(err.message);
})

//перевірки на нутро

fs.readdir(path.join(__dirname, 'node app.js'), { withFileTypes: true }, (err, files)=>{
  if (err) throw new Error(err.message);
  files.forEach(file=>{
    console.log(file.isDirectory());
  })
})
