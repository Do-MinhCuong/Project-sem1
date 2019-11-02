// /**
//  * Created by Cuong on 10/22/2019.
//  */
$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.c-scroll-top-wrapper').addClass('show');
            } else {
                $('.c-scroll-top-wrapper').removeClass('show');
            }
        });

        $('.c-scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});
