var Sync = require('sync');
function get_principle(x,cb) { 
    process.nextTick(function(){
        try{
            // setTimeout(function(){
                if(x==200){
                   console.log("error");
                    throw {message:'something went wrong'};
                   
                }else{
                    cb(null,x);
                }
                // },3000)
            
        }catch(e){
            console.log("here");
            cb(e.message)
        }
    });
 }
function get_rate(y,cb) { 
    process.nextTick(function(){
        setTimeout(function(){
                cb(null,y);
            },3000)
        })
}
function get_time(z,cb) { 
    process.nextTick(function(){
        setTimeout(function(){
                cb(null,z);
            },3000)
        })
}
function compute_interest(principle, rate, time, cb) { 
    process.nextTick(function(){
        setTimeout(function(){
            cb(null,(principle*rate*time)/100); 
            },3000)
        })
    
}
 
Sync(function compute_a_result(){
    try{
        var principal = get_principle.sync(null,440)
        // var principal = get_principle(440)
        console.log(principal);
        var rate = get_rate.sync(null,9);
        console.log(rate);
        var time = get_time.sync(null,1);
        console.log(time);
        var result = compute_interest.sync(null,principal, rate, time);
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
    
})