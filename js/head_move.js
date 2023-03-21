$(document).ready(function(){



    var headScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headHeight = $('header').outerHeight();




    $(window).scroll(function(event){

        headScroll = true;

    });

    setInterval(function(){
        if(headScroll){
            hasScrollde();
            headScroll = false;
        }
    }, 250);



    function hasScrollde(){

        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > headHeight){
            $('header').removeClass('head_down').addClass('head_up');
        } else {
            if(st + $(window).height() < $(document). height()){
                $('header').removeClass('head_up').addClass('head_down');
            }
        }

        lastScrollTop = st;

    }



});
