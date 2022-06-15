const fs = require('fs')
var tinh = require('./doing.js')

var data = fs.readFileSync('test.txt')
console.log(data.toString());
console.log('program end sync');

fs.readFile('test.txt','utf8',(err,data)=>{
    if(err){
        console.log((err));
        return
    }
    console.log(data);
})
console.log('program end');

// console.log(tinh.AddNumber(10,10));


// console.log(tinh.ktsnt(9));