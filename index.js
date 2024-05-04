const fs = require('fs');
const path = require('path');
const readline = require('readline');

//Task 1
fs.mkdirSync("Assignment-2");  // Create a Folder using FS Module with mkdirsunc

//Task 2
fs.writeFileSync(path.join('Assignment-2','data.txt'),"My Name is Bittu Pathania"); // Add a text file using writefilesync

//Task 3
fs.writeFileSync(path.join('Assignment-2','data.txt'),"This is override the data"); // if we again using same module with another text they will override the data

// Task 4
fs.appendFileSync(path.join('Assignment-2','data.txt'), "My name bittu pathania and i am in FS14 Batch"); //Using AppendFile to add another data in prev data.

// Task 5
 const data = fs.readFileSync(path.join('Assignment-2','data.txt'),{encoding:'utf-8'},(data,error)=>{
    if(error){
        
        return error;
    }
    else{
        return data;
    }
})
console.log(data);

// // Task 6
fs.unlinkSync("Assignment-2/data.txt"); // Delete the File

// //Task 7
fs.rmdirSync("Assignment-2");  // Delete the folder

//Task 8 

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your Name ?",(name)=>{
       console.log("My Name is:"+ name);
});

