var fs = require("fs");
fs.readFile('test_data.txt',function(err,data){
    if (err) {    
        console.error(err);
    }
    fs.readFile('test_data2.txt', function (err2, data2) {
        if (err2) {
            console.error(err2);
        }
        var arr = [data,data2];
        var buf = Buffer.concat(arr);
        fs.writeFile('merge.txt',buf,function(err3) {
            if (err3) {    
                console.error(err3);
                return 1;
            }
            console.log("Reading merge.txt");
            fs.readFile('merge.txt', function (err4, buf) {
                if (err4) {
                    return console.error(err4);
                }
                console.log(buf.toString());
            });
        });
    });
})