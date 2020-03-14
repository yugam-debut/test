$(document).ready(function(){
    $("#eventForm").on('submit', function(e){
        e.preventDefault();
        console.log("Hello");
        var fd = new FormData($(this)[0]);
        $.ajax({
            url: '/upload',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                console.log(data);
            }
        });
    })
});