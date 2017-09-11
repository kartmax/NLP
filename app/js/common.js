$(function() {

	// Custom JS
    //Tabs
    $( "#tabs" ).tabs();

    // OWL CAROUSEL
    $('.carousel-1').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        items: 1,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            }
        }
    });
    $('.carousel-2').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        items:1,
        navSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            900:{
                items:3,
            },
            1200:{
                items:4,
            }

        }
    });
    $('.carousel-3').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        items: 1,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            900:{
                items:3,
            },
            1200:{
                items:4,
            }

        }
    });

    //Back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
        });
    }


    $(document).ready(function () {
        $(".back-call").magnificPopup();
    });


    //E-mail Ajax Send
    $("#registration").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../libs/uniMail-master/script/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    $('#navigation').slimmenu(
        {
            resizeWidth: '1080',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


});
