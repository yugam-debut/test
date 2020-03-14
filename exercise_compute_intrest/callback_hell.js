//* Function Declaration
function get_principle(cb) { cb(440); }
function get_rate(cb) { cb(9); }
function get_time(cb) { cb(1); }
function compute_interest(principle, rate, time, cb) { cb((principle*rate*time)/100); }

//! CallBackHell
function compute_a_result() {
    get_principle(function (x) {
        console.log("Principle = "+x);
        get_rate(function (y) {
            console.log("Rate = "+y);
            get_time(function (z){
                console.log("Time = "+z);
                compute_interest(x, y, z, function(result) {
                    console.log("Simple Interest = "+result);
                });
            });
        });
    });
}

//? Function Calling
compute_a_result();
