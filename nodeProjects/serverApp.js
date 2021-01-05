const http = require("http");

// creates server and executes function for every incoming request

/*
http.createServer(function(req, res){

});

*/

// use an arrow function for shorter syntax when creating a server to respond to incoming requests
// output the request object to the console to see what's inside
// create a const server and set it equal to the server functionality
// you can use process.exit(); syntax to force quit the current process for the executed code

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>serverAppTest</title></head>");
  res.write("<body><h1>This is a test server from Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
  // any code passed in after the res.end() method will not be executed, since the server response will have ended.
});

// use server.methods for functionality

server.listen(9999);

// to quite a running node.js server, use keyboard interrupt Ctrl-C in the terminal where the server process is running

// print requests made to the server to the console: console.log(req.url, req.method, req.headers);

// the console will output the request data argumetns and methods passed in.

// GET is the default http method used by the server
