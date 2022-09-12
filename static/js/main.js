(function($) {
    "use strict";

    /*-------------------------------------
     jQuery Main Menu activation code
     --------------------------------------*/
    jQuery('nav#dropdown').meanmenu();

    /*----------------------------
    wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
    owl active
    ------------------------------ */
    $(".blog-slider").owlCarousel({
        autoPlay: true,
        slideSpeed: 500,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
    });
    
    /*----------------------------
     Partner Logo
    ------------------------------ */
    $(".client-logo").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 5,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*About Team Jquery*/

    $(".total-team").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 4,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    /*-------------------------------------
       Related Product jQuery activation code
       -------------------------------------*/
    $(".single-product-store").owlCarousel({

        // Most important owl features
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: false,

    });
    /*-------------------------------------
       Related Product jQuery activation code
       -------------------------------------*/
    $(".single-shop-area").owlCarousel({

        // Most important owl features
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: false,

    });
    /*-------------------------------------
       Single Photo Contest jQuery activation code
       -------------------------------------*/
    $(".single-photo-slide").owlCarousel({
        // Most important owl features
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: false,

    });
	
	 /*-------------------------------------
       Single Photo Contest jQuery activation code
       -------------------------------------*/
    $(".home-single-slide").owlCarousel({
        // Most important owl features
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],		
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: false,

    });
	
    /*-------------------------------------
       Single Photo slide jQuery activation code
       -------------------------------------*/
    $(".photo-details-slide").owlCarousel({

        // Most important owl features
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: false,

    });
    /*-------------------------------------
       Testimonail jQuery activation code
       -------------------------------------*/
    $(".testimonial-area").owlCarousel({

        // Most important owl features
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive
        responsive: true,
        pagination: true,

    });


    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*------------------------------------
    jquery Serch Box activation code 
    --------------------------------------*/
    $("li#search > i").on('click', function() {
        $(".search-box").slideToggle('slow');
    });

    /*------------------------------------
    SideSlide menu Activation
    -------------------------------------*/
    $('li#slideBotton > a > i').on('click', function() {
        $('#sideSlide').addClass("highlight");
    });
    $('.close').on('click', function() {
        $('#sideSlide').removeClass("highlight");
    });
    /*-------------------------------
    Counter Up
    ---------------------------------*/
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
    });

    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });

    // image loaded portfolio init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridFilter').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    } 

    // project Filter
    if ($('.gridFilter li').length) {
        var projectfiler = $('.gridFilter li');
            if(projectfiler.length){
            $('.gridFilter li').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }
    /*----------------------------
    mixitup active
    ------------------------------ */
    $('#Container').mixItUp();

    /*---------------------
    countdown
    --------------------- */
    $("#getting-started")
        .countdown("2018/12/12", function(event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });

    $("#getting-started-two")
        .countdown("2018/12/06", function(event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });
	
	$("#getting-started-three")
        .countdown("2018/11/06", function(event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });
		
	$("#getting-started-four")
        .countdown("2018/08/06", function(event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });		
    //Multistep form
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.on('click', function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.on('click', function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

    /*--------------------------
     Sticky Menu Activation Code
    ---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#sticky').addClass('stick');
        } else {
            $('#sticky').removeClass('stick');
        }

    });

    /*----------------------------
        Business active
       ------------------------------ */
    $(".total-business").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    /*-------------------------------------
    Fancybox jquery activation Code
    -------------------------------------*/
    $('.fancybox').fancybox();
    /*-------------------------------------
    Single Product jQuery activation code
    -------------------------------------*/
    $(".tab-image").owlCarousel({
        // Most important owl features
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        // Navigation
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // Responsive 
        responsive: true,
        pagination: false,
    });

    /*-------------------------------------
    Single Product Tab  activation code
    -------------------------------------*/
    $(".tab-image").on('click', 'li', function(event) {
        event.preventDefault();
        var displayTarget = $("#product-1");
        displayTarget.find('a').removeClass('active');
        var id = $(this).attr('data-id');
        var targetClass = ".product-gallery-img-" + id;
        console.log(targetClass);
        displayTarget.find(targetClass).addClass('active');
    });
    /*----------------------------
     price-slider active
    ------------------------------ */
    $("#slider-range").slider({
        range: true,
        min: 40,
        max: 600,
        values: [60, 570],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
		

      jQuery(document).on("ready", function () {

        /*
        ==========================================
        Window Preload
        ==========================================
        */

        jQuery(window).load(function () {
            jQuery(".template-preloader-rapper").fadeOut(500);
        });

    });
	
	/*==========================================
       CountDownTimer
    ==========================================*/
	$(".CountDownTimer").TimeCircles({
		fg_width: 0.015,
		bg_width: 0.8,
		circle_bg_color: "#e1e1e1",
		time: {
			Days:{
				color: "#ff574f"
			},
			Hours:{
				color: "#ff574f"
			},
			Minutes:{
				color: "#ff574f"
			},
			Seconds:{
				color: "#ff574f"
			}
		}
	});	
})(jQuery);
