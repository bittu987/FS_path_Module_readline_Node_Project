File System (FS) and Path Module
This repository provides documentation and examples for the File System (FS) and Path modules in Node.js. These modules are essential for interacting with files and directories, performing operations such as reading, writing, and manipulating file paths.

File System (FS) Module
The File System module in Node.js allows you to interact with the file system on your computer. It provides methods for performing various operations on files and directories, such as reading from files, writing to files, creating directories, and more.

Usage
To use the FS module in your Node.js application, you first need to import it:

javascript
Copy code
const fs = require('fs');
Once imported, you can use various methods provided by the FS module. Here are some common examples:

Reading from a file:
javascript
Copy code
fs.readFile('filename.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
Writing to a file:
javascript
Copy code
fs.writeFile('filename.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
Creating a directory:
javascript
Copy code
fs.mkdir('new_directory', (err) => {
  if (err) throw err;
  console.log('Directory created successfully!');
});
Deleting a file:
javascript
Copy code
fs.unlink('filename.txt', (err) => {
  if (err) throw err;
  console.log('File deleted successfully!');
});
Documentation
For detailed documentation on the FS module, refer to the official Node.js documentation: Node.js FS Module Documentation

Path Module
The Path module in Node.js provides utilities for working with file paths. It allows you to manipulate file paths, resolve relative paths, extract path components, and more.

Usage
To use the Path module in your Node.js application, you first need to import it:

javascript
Copy code
const path = require('path');
Once imported, you can use various methods provided by the Path module. Here are some common examples:

Resolving a file path:
javascript
Copy code
const fullPath = path.resolve('dir', 'file.txt');
console.log(fullPath); // Outputs: /path/to/dir/file.txt
Extracting the directory name from a file path:
javascript
Copy code
const directory = path.dirname('/path/to/dir/file.txt');
console.log(directory); // Outputs: /path/to/dir
Extracting the file name from a file path:
javascript
Copy code
const filename = path.basename('/path/to/dir/file.txt');
console.log(filename); // Outputs: file.txt
