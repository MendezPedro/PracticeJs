// $(document).on('turbolinks:load', function () {
//     // $('#collapseOne').hide();
//     // $('#btn1').click(function() {
//     //     $('#collapseOne').slideUp('slow');
//     // });
    
//     $('#btn1').click(function() {
//         if ( $('#collapseOne').is(':hidden') ) {
//             $('#collapseOne').show('slow');
//         } else {
//         $('#collapseOne').slideUp();
//         }
//         // $('#collapseOne').css("display", "block");
//         // $('#collapseOne').slideDown('slow');
//     });
// });
$(document).on('turbolinks:load', function () {
    $('#slide1').click(function () {
        $('#collapseOne').slideToggle('slow');
    });
    $('#slide2').click(function () {
        $('#collapseTwo').slideToggle('slow');
    });
    $('#slide3').click(function () {
        $('#collapseThree').slideToggle('slow');
    });
})