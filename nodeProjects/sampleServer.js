const http = require("http");
const { type } = require("os");
const fs = require("fs");

// routing requests
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter text here:</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>'
    );
    // name for the form does not have to be 'message'; the server will add any input data to the request and make it accessible via the assigned name.
    res.write("</html>");
    return res.end();
    // the above return res.end() functionality ends the execution of the code function it is contained in; it will not run the rest of the code in the function.
  }
  //redirecting requests
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end'); // to be executed once the server is done parsing incoming requests
    fs.writeFileSync("message.txt", "sampleText");
    //res.writeHead((statusCode: 302), {});
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>serverAppTest</title></head>");
  res.write("<body><h1>This is a test server from Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(9999);


// refer to documentation for information about streams and buffers for more detail about parsing/getting data from request bodies.
// data over the network is tranferred through a data 'stream' in several request body chunks until it is fully parsed 
// use a buffer to organize incoming chunks of data; allows server program to hold and work with several pieces of information before they are sent back to the client from the server.
// use req.on(); method to listen to incoming events that pass through the server.
// pass in the type of event into req.on('type of event'); that you need to listen for.
// use the req.on(); method to create a function that executes every time the particular event passes through the listener.
