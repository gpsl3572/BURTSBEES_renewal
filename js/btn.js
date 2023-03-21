$(document).ready(function(){

var a = 0;

$('#btn_wrap').click(function(){

    $('.line').removeClass('in_btn');

    $('#btn_top').toggleClass('line-top').toggleClass('top_move');
    $('#btn_mid').toggleClass('line-mid').toggleClass('mid_move');
    $('#btn_bot').toggleClass('line-bot').toggleClass('bot_move');

    if(a == 0){
        $('.pop_menu').fadeIn();
        $('.wrap').css({
            position : 'fixed'
        });

        a++;

    }else if(a == 1){
        $('.pop_menu').fadeOut();
        $('.wrap').css({
            position : 'unset'
        });
        a--;
    }

});


$('.menu').click(function(){

    $('#btn_top').trigger('click');

    $('.wrap').css({
        position : 'unset'
    });
    $('.pop_menu').fadeOut();
    
});



});