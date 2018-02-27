$(document).ready (function(){
    $('.submit_date').click(function (){
        var userYear = parseInt($('.year').val());
        var now = new Date ();   
        var age = now.getFullYear() - userYear; 

        if (age >= 18 ){
            $('.errors').text('Congratulations ! You are an Adult :)');
            $('.errors').addClass("green");
        } else {
            $('.errors').text('Sorry ! You are still a Kid :(');
            $('.errors').addClass("red");
        } 
            $('.main_container').hide();
        });
}); 
   
