//Reading File Contents
var fs = require('fs');var content = fs.readFileSync("test_data.txt", "utf8");
console.log(content);
console.log('End of File... \n');


//Set Timeout Function
setTimeout(function(){
    console.log('I have come after 1 second')
},1000);


//passsing parameter with file name in command line
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' : ' + (process.argv[j]));
}
console.log("\n")


//Code To perform Before Exit
process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
  
  console.log('This message is displayed first.');

