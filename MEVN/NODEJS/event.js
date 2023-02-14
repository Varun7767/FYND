var fs = require('fs');  //import statement
// it imports the filestream from the node modules
// fs=filestream is an inbuilt module 
// module :
// Collection of functionalities which are not user sreated bit available from node js
var rs = fs.createReadStream('./closure.js')
// var is a shortform for variable used to store local values/temporary values
//reading the outside placed demotxt file
//event= action performed on an object
rs.on('open',function(){
    console.log('The file is open')
});