var async = require('async');
function get_principle(cb) {
    setTimeout(function() {
        cb(null, 440);
    }, 2000);
}
function get_rate(cb) {
    setTimeout(function() {
        cb(null, 9);
    }, 100);
}
function get_time(cb) {
    setTimeout(function() {
        cb(null, 1);
    }, 1000);
}
async.parallel([
    get_principle,
    get_rate,
    get_time
],

function compute_a_result(err, results) {
    var principal = results[0];
    var rate = results[1];
    var time = results[2];
    console.log("Simple Interest : "+(principal*rate*time/100));
});