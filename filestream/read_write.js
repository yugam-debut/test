var fs = require("fs");
var data = fs.readFileSync('test_data.txt');
var data2 = fs.readFileSync('test_data2.txt');
console.log("Going to create file!");
// fs.open('merge.txt', 'a', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });
var arr = [data,data2];
var buf = Buffer.concat(arr);
console.log("Going to merge data into merge.txt file");
fs.writeFile('merge.txt',buf, 
function(err) {
    if (err) {
        
        console.error(err);
        return 1;
    }
    console.log("Read merge.txt");
    fs.readFile('merge.txt', function (err, buf) {
        if (err) {
            return console.error(err);
        }
        console.log(buf.toString());
    });
});