$(document).ready(function() {
    /* Owl carousel */
    $(".owl-carousel").owlCarousel({
        slideSpeed : 500,
        rewindSpeed : 1000,
        mouseDrag : true,
        stopOnHover : true
    });
    /* Own navigation */
    $(".owl-nav-prev").click(function(){
        $(this).parent().next(".owl-carousel").trigger('owl.prev');
    });
    $(".owl-nav-next").click(function(){
        $(this).parent().next(".owl-carousel").trigger('owl.next');
    });
});/**
 * Created by Phong Linh on 10/29/2019.
 */
