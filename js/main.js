(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".hamburger").click(function(){
            $(".wrapper").addClass("active");
        });

        $(".close, .bg_shadow").click(function(){
            $(".wrapper").removeClass("active");
        });


        $(".sidebar-dropdown > a").click(function() {
            $(".sidebar-submenu").slideUp(250);
            if (
                $(this)
                    .parent()
                    .hasClass("active")
            ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .parent()
                    .removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .next(".sidebar-submenu")
                    .slideDown(250);
                $(this)
                    .parent()
                    .addClass("active");
            }
        });

        // $(function() {
        //     $("form").attr('novalidate', 'novalidate');
        //     $('.panel__link, .form__retrieve-pass').on('click', function(e) {
        //
        //         e.preventDefault();
        //
        //         if ($(this).attr('href') === '#password-form') {
        //             $('.panel__header').removeClass('active');
        //         } else {
        //             $(this).parent().addClass('active');
        //             $(this).parent().siblings().removeClass('active');
        //         }
        //         target = $(this).attr('href');
        //         $('.panel__forms > form').not(target).hide();
        //         $(target).fadeIn(500);
        //     });
        //
        //     $('.panel__prev-btn').on('click', function(e) {
        //         $('.panel, .panel_blur').fadeOut(300);
        //     });
        // });
        //
        // $.validate({
        //     modules : 'security',
        //     errorMessageClass: 'form__error',
        //     validationErrorMsgAttribute: 'data-error'
        // });



        /**
   * Hero carousel indicators
   */
 let heroCarouselIndicators = select("#hero-carousel-indicators")
 let heroCarouselItems = select('#heroCarousel .carousel-item', true)

 heroCarouselItems.forEach((item, index) => {
   (index === 0) ?
   heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
     heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
 });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));





