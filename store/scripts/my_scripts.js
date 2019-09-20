$(document).ready(function(){
	var $menu = $('nav#mobile-menu').mmenu({
        "navbar": {
            "title": "Каталог товаров",
                },
        "extensions": [
            "position-front"
        ],
    });
    $(".mm-navbar").append( "<button class='mobile-menu-close'></button" );
    var API = $("nav#mobile-menu").data( "mmenu" );
    $('.mobile-menu-close').click(function() {
        API.close();
    }); 
	/** **/
	$('.slider-top').slick({
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        dots: true,
    });
    setTimeout(function() {
       $('.slider-top').addClass('showed');
	}, 300);
	setTimeout(function() {
       $('.slider-top').addClass('no-animate');
	}, 500);
    /** **/
    $(".box-entrance").click( function() {
        var el = $(this);
        if(el.hasClass("active")) {
            el.removeClass('active');
            el.closest('.all-box-entrance').find(".box-entrance_dropdown").slideUp(0);
        } else {
            el.addClass('active');
            el.closest('.all-box-entrance').find(".box-entrance_dropdown").slideDown(0);
        }
    });
    $(document).mouseup(function (e){
        var div = $(".all-box-entrance");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.find('.box-entrance_dropdown').slideUp(0);
            $('.box-entrance').removeClass('active');
        }
    });
    /** **/
    $(".box-favorites").click( function() {
        var el = $(this);
        if(el.hasClass("active")) {
            el.removeClass('active');
            el.closest('.all-box-favorites').find(".modal-favorites").slideUp(0);
        } else {
            el.addClass('active');
            el.closest('.all-box-favorites').find(".modal-favorites").slideDown(0);
        }
    });
    $(document).mouseup(function (e){
        var div = $(".all-box-favorites");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.find('.modal-favorites').slideUp(0);
            $('.box-favorites').removeClass('active');
        }
    });
    /** **/
    $(".box-basket").click( function() {
        var el = $(this);
        if(el.hasClass("active")) {
            el.removeClass('active');
            el.closest('.all-box-basket').find(".all-modal-basket").slideUp(0);
        } else {
            el.addClass('active');
            el.closest('.all-box-basket').find(".all-modal-basket").slideDown(0);
        }
    });
    $(document).mouseup(function (e){
        var div = $(".all-box-basket");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.find('.all-modal-basket').slideUp(0);
            $('.box-basket').removeClass('active');
        }
    });
    $(".js-basket").mCustomScrollbar({
        setHeight: 290
    });
    /** **/
    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
        elem = $(".header"); 
        if(windowWidth > 1280){
            $(".js-stiky").sticky({topSpacing:0});
        }
        else{
            $(".js-stiky").unstick();
        }
    }
    checkWidth();
    $(window).resize(function(){
        checkWidth();
    });
    /** **/
	$('.basket-plus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.basket-minus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	/** **/
    $(".button-category").click( function() {
        var el = $(this);
        if(el.hasClass("active")) {
            el.removeClass('active');
            el.closest('.fond-menu').removeClass('active');
            el.closest('body').removeClass('hidden-scroll');
        } else {
            el.addClass('active');
            el.closest('.fond-menu').addClass('active');
            el.closest('body').addClass('hidden-scroll');
        }
    });
    $(document).mouseup(function (e){
        var div5 = $(".menu-left, .button-category");
        if (!div5.is(e.target)
            && div5.has(e.target).length === 0) {
            div5.closest('.fond-menu').removeClass('active');
            div5.closest('.fond-menu').find('.button-category').removeClass('active');
            div5.closest('body').removeClass('hidden-scroll');
        }
    });
    /** **/
    $('.menu-right_dropdown > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('active')) {
            element.removeClass('active');
            element.find('li').removeClass('active');
            element.closest('body').removeClass('hidden-scroll');
        }
        else {
            element.addClass('active');
            element.siblings('li').removeClass('active');
            element.siblings('li').find('li').removeClass('active');
			element.closest('body').addClass('hidden-scroll');
        }
    });
    $(document).mouseup(function (e){
        var div12 = $(".menu-right_dropdown");
        if (!div12.is(e.target)
            && div12.has(e.target).length === 0) {
            div12.removeClass('active');
        }
    });
    /** **/
    var readmore = $('.my-toggle-block');
    if (readmore.length > 0){
        readmore.readmore({
            collapsedHeight: 398,
            speed: 600,
            moreLink: '<div class="read-text_link read-more"><span>Читать полностью</span></div>',
            lessLink: '<div class="read-text_link read-more"><span>Скрыть полностью</span></div>' 
        });
    }
    /** **/
    $('.slider-product').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 979,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
			  breakpoint: 479,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		]
	});
	$('.js-next').on('click', function() {
	  	$('.slider-product').slick('slickNext');
	});
    $('.js-prev').on('click', function() {
	  	$('.slider-product').slick('slickPrev');
	});
	/** **/
	$(window).scroll(function(){
        var scrollDistance=$(window).scrollTop();
        if(scrollDistance>$(document).height()-$(window).height()-$("footer").height()-20){
            $(".scroll-top").addClass("ab").css("top",$(document).height()-scrollDistance-$("footer").height()-80);
        } else {
            $(".scroll-top").removeClass("ab").css("top","auto")
        } 
        if(scrollDistance==0){
            $(".scroll-top").hide()
        } else {
            $(".scroll-top").show()
        }
	});
    if($(window).scrollTop()==0){
        $(".scroll-top").hide()
    } else {
        $(".scroll-top").show()
    }
    $(".scroll-top").bind("click",function(){
        $("body,html").animate({scrollTop:0},800)
    });




});