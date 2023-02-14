var http = require('http');
var ts = require("./taskserver1");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}
    );
  

   // res.write("The date and time are:" +());
   res.write('I am from Sangli');
  res.end();
}).listen(8083);