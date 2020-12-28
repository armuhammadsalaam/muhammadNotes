console.log("Hello from NodeJS");

/*
NodeJS is capable of accessing your local file system.
In order to do this, use built-in node require("fs");
This command calls for a particular program to require a 
specific module from the node library/repository.
*/

const fs = require("fs");

/*
The writeFileSync built-in function writes a file to
the hard disk; will replace file if name exists.
this function takes multiple arguments: path/name, contents
*/

fs.writeFileSync("hello.txt", "Hello from NodeJS")


