$(document).on('turbolinks:load', function () {
    $('.hide').click(function(){
        $('#collapseExample').hide(); 
    });
    $('.show').click(function(){
        $('#collapseExample').show();
    });
});