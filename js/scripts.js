$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

});

$(document).ready(function () {
   $('input').mouseover(function (e) {
       e.preventDefault();
       var left = $(this).next();
       left.css('display', 'block');
   });
    $('input').mouseout(function (e) {
        e.preventDefault();
        var left = $(this).next();
        left.css('display', 'none');
    });
    $('button').click(function (e) {
        e.preventDefault();
        $('.tip').css('display', 'block');
    });
});

$(document).ready(function () {
   $('input').focus(function (e) {
       e.preventDefault();
       var left = $(this).next();
       $('.right-input').css('display','none');
       left.css('display', 'block');
   });
    $('button').focus(function (e) {
        e.preventDefault();
        $('.right-input').css('display','none');
    });
});