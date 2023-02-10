var http = require('http');

//var mod = require('math2.js');
// const { features } = require('process');

var dt =require('./ownModule');

http.createServer(function (req, res) {

    // RES: REFERS TO REQUEST
    // RESPONSE HAS 3 features HEAD AND BODY AND TextTrackList
    // HEAD : CODE INDICATES SUCESS OR FAILURE OR SATUS OF A CODE

    res.writeHead(200, {'Content-Type': 'text/html'}
    );
  // res.write('Hello World!');
  res.write("The date and time are:" +dt.getCurrentDate());
  res.end();
}).listen(8800);