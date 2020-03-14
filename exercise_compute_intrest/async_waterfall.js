var async = require('async');

async.waterfall([
    get_principle,
    get_rate,
    get_time
], function compute_a_result (err, result) {
    console.log(result);
});

function get_principle(cb) {
    setTimeout(function() {
        cb(null, 440);
    }, 1000);
}
function get_rate(arg1,cb) {
    setTimeout(function() {
        cb(null, arg1*9);
    }, 2000);
}
function get_time(arg1,cb) {
    setTimeout(function() {
        cb(null, (arg1*1/100));
    }, 200);
}