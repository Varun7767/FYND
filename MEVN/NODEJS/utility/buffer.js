var buffer1=Buffer.alloc(100);


buffer1.write("i am here");

var a=buffer1.toString('utf-8');

console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var bufferSource= new Buffer('ABC');
var bufferdestination=Buffer.alloc(3);
bufferSrc.copy(bufferdest);
var Data=bufferDest.toString('utf-8');
console.log(Data);

var bufferOld=new Buffer('INDIA IS GREAT');
var bufferNew=bufferOld.slice(0,4);
console.log(bufferNew.toString());


var bufferOne=new Buffer('INDIA');
var bufferTwo=new Buffer('IS GREAT');
var bufferThree=new Buffer('JAI HIND');
var bufferFour=new Buffer([bufferOne,bufferTwo,bufferThree]);
console.log(bufferThree.toString());