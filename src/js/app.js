import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {

  // smooth scrolling
  // Select all links with hashes
  if (document.querySelector('.link-to')) {
    $('a[href*="#"].link-to').click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
        && 
        location.hostname === this.hostname
      ) {
      // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
  }
  // smooth scrolling

  // fixed header
  if (document.querySelector('.first-screen-js')) {
    var firstScreenHeightPerc = $('.first-screen-js').height() / 10 * 2.5;
    var header = $('.header');
   
    $(window).scroll(function(event) {
      if ($(window).scrollTop() > firstScreenHeightPerc) {
      	if (!$(header).hasClass('header_dark')) {
      		$(header).addClass('header_dark');
      	}
      } else if ($(header).hasClass('header_dark')) {
      	$(header).removeClass('header_dark');
      }   
    });
  } else {
    $('.header').addClass('header_dark');
  }
  // fixed header

  // mobile-menu
  if (document.querySelector('.header-nav__button')) {
    $('.header-nav__button').click(function() {
    	$('body').toggleClass('is-no-scroll');
    	$(this).toggleClass('is-active');
    	if ($('.header-nav').hasClass('is-show')) {
    		if ($('.header-nav-list-dropdown').css('display') === 'block') {
    			$('.header-nav-list-dropdown').slideUp(250);
    		}
    	}
    	$('.header-nav').toggleClass('is-show');
    });
  }
  // mobile-menu

  // mobile-menu dropdown
  if (document.querySelector('.header-nav-list-li_dropdown')) {
    $('.header-nav-list-li_dropdown').click(function(event) {
    	if ($(event.target).hasClass('header-nav-list-li__link') || $(event.target).hasClass('header-nav-list-li__caret') || $(event.target).hasClass('header-nav-list-li_dropdown') ) {
    		event.preventDefault();
    		$($(this).find('.header-nav-list-dropdown')).slideToggle(250);
    	}
    });
  }
  // mobile-menu dropdown

  if (document.querySelector('.slider-bg')) {
    $('.slider-bg').slick({
    	autoplay: true,
    	autoplaySpeed: 7500,
    	infinite: true,
    	dots: false,
    	arrows: false
    });
  }

  if (document.querySelector('.slider')) {
    $('.slider').slick({
    	autoplay: true,
    	autoplaySpeed: 7500,
    	infinite: true,
    	dots: false,
    	prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev"><svg class="slider-arrow-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="38.1px" height="38.2px" viewBox="0 0 38.1 38.2" style="enable-background:new 0 0 38.1 38.2;" xml:space="preserve"><path class="slider-arrow-svg__path" d="M37.2,22.8c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.1-0.7-0.1-1.2c0-0.5,0.1-0.9,0.3-1.2 c0.1-0.3,0.3-0.6,0.5-0.8c0.2-0.3,0.3-0.5,0.4-0.9c0.1-0.3,0.2-0.8,0.1-1.3c-0.1-0.5-0.2-0.9-0.4-1.2c-0.2-0.3-0.4-0.5-0.6-0.7 c-0.2-0.2-0.5-0.4-0.7-0.7c-0.2-0.3-0.4-0.6-0.6-1.1c-0.2-0.5-0.2-0.8-0.3-1.2c0-0.3,0-0.6,0.1-1c0-0.3,0.1-0.6,0-1 C35.5,9.4,35.3,9,35,8.5c-0.3-0.4-0.6-0.7-0.9-0.9c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.6-0.4-1-0.7 c-0.4-0.3-0.6-0.7-0.7-1c-0.2-0.3-0.3-0.6-0.4-0.9c-0.1-0.3-0.2-0.6-0.4-0.9c-0.2-0.3-0.5-0.6-1-0.9c-0.5-0.3-0.9-0.4-1.2-0.4 c-0.4,0-0.7,0-1,0.1c-0.3,0-0.6,0.1-1,0.1c-0.3,0-0.7,0-1.2-0.2c-0.5-0.2-0.8-0.3-1.1-0.5C23.2,1.4,23,1.2,22.7,1 c-0.2-0.2-0.4-0.4-0.8-0.6c-0.3-0.2-0.7-0.3-1.2-0.4c-0.5,0-0.9,0-1.3,0.1c-0.3,0.1-0.6,0.3-0.9,0.5c-0.3,0.2-0.5,0.4-0.8,0.5 c-0.3,0.1-0.7,0.3-1.2,0.3c-0.5,0.1-0.9,0.1-1.2,0c-0.3-0.1-0.6-0.2-0.9-0.3C14.2,1.1,13.9,1,13.6,1c-0.4,0-0.8,0-1.3,0.2 c-0.5,0.2-0.8,0.4-1.1,0.7c-0.2,0.3-0.4,0.5-0.6,0.8c-0.2,0.3-0.3,0.5-0.5,0.8C9.9,3.7,9.6,4,9.2,4.3C8.8,4.5,8.4,4.7,8.1,4.8 C7.8,4.9,7.5,4.9,7.2,4.9C6.9,5,6.5,5,6.2,5.1C5.9,5.3,5.5,5.5,5.2,5.9C4.8,6.3,4.6,6.6,4.5,7c-0.1,0.3-0.1,0.7-0.2,1 c0,0.3,0,0.6-0.1,1C4.1,9.2,4,9.6,3.7,10c-0.3,0.4-0.5,0.7-0.8,0.9c-0.3,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.5,0.3-0.8,0.6 c-0.2,0.3-0.5,0.6-0.6,1.1c-0.2,0.5-0.2,0.9-0.1,1.3c0,0.4,0.2,0.6,0.3,0.9C1,15.7,1.2,16,1.2,16.3c0.1,0.3,0.1,0.7,0.1,1.2 c0,0.5-0.1,0.9-0.3,1.2c-0.1,0.3-0.3,0.6-0.5,0.8c-0.2,0.3-0.3,0.5-0.4,0.9C0,20.8,0,21.2,0,21.7c0.1,0.5,0.2,0.9,0.4,1.2 c0.2,0.3,0.4,0.5,0.6,0.7c0.2,0.2,0.5,0.4,0.7,0.7c0.2,0.3,0.4,0.6,0.6,1.1c0.2,0.5,0.2,0.8,0.3,1.2c0,0.3,0,0.6-0.1,1 s-0.1,0.6,0,1c0.1,0.4,0.2,0.7,0.5,1.2c0.3,0.4,0.6,0.7,0.9,0.9c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.2,0.9,0.3 c0.3,0.1,0.6,0.4,1,0.7c0.4,0.3,0.6,0.7,0.7,1c0.2,0.3,0.3,0.6,0.4,0.9c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.3,0.5,0.6,1,0.9 c0.5,0.3,0.9,0.4,1.2,0.4c0.4,0,0.7,0,1-0.1c0.3,0,0.6-0.1,1-0.1c0.3,0,0.7,0,1.2,0.2c0.5,0.2,0.8,0.3,1.1,0.5 c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.2,0.4,0.4,0.8,0.6c0.3,0.2,0.7,0.3,1.2,0.4c0.5,0,0.9,0,1.3-0.1c0.3-0.1,0.6-0.3,0.9-0.5 c0.3-0.2,0.5-0.4,0.8-0.5c0.3-0.1,0.7-0.3,1.2-0.3c0.5-0.1,0.9-0.1,1.2,0c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.2 c0.4,0,0.8,0,1.3-0.2c0.5-0.2,0.8-0.4,1.1-0.7c0.2-0.3,0.4-0.5,0.6-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.5-0.5,0.9-0.8 c0.4-0.3,0.8-0.4,1.1-0.5c0.3-0.1,0.6-0.1,0.9-0.2c0.3,0,0.6-0.1,1-0.2c0.3-0.1,0.7-0.3,1.1-0.7c0.4-0.4,0.6-0.8,0.7-1.1 c0.1-0.3,0.1-0.7,0.2-1c0-0.3,0-0.6,0.1-1c0.1-0.3,0.2-0.7,0.5-1.1c0.3-0.4,0.5-0.7,0.8-0.9c0.3-0.2,0.5-0.4,0.8-0.5 c0.3-0.2,0.5-0.3,0.8-0.6c0.2-0.3,0.5-0.6,0.6-1.1c0.2-0.5,0.2-0.9,0.1-1.3C37.4,23.4,37.3,23.1,37.2,22.8"/></svg></button>',
    	nextArrow: '<button type="button" class="slider-arrow slider-arrow_next"><svg class="slider-arrow-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="38.1px" height="38.2px" viewBox="0 0 38.1 38.2" style="enable-background:new 0 0 38.1 38.2;" xml:space="preserve"><path class="slider-arrow-svg__path" d="M37.2,22.8c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.1-0.7-0.1-1.2c0-0.5,0.1-0.9,0.3-1.2 c0.1-0.3,0.3-0.6,0.5-0.8c0.2-0.3,0.3-0.5,0.4-0.9c0.1-0.3,0.2-0.8,0.1-1.3c-0.1-0.5-0.2-0.9-0.4-1.2c-0.2-0.3-0.4-0.5-0.6-0.7 c-0.2-0.2-0.5-0.4-0.7-0.7c-0.2-0.3-0.4-0.6-0.6-1.1c-0.2-0.5-0.2-0.8-0.3-1.2c0-0.3,0-0.6,0.1-1c0-0.3,0.1-0.6,0-1 C35.5,9.4,35.3,9,35,8.5c-0.3-0.4-0.6-0.7-0.9-0.9c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.6-0.4-1-0.7 c-0.4-0.3-0.6-0.7-0.7-1c-0.2-0.3-0.3-0.6-0.4-0.9c-0.1-0.3-0.2-0.6-0.4-0.9c-0.2-0.3-0.5-0.6-1-0.9c-0.5-0.3-0.9-0.4-1.2-0.4 c-0.4,0-0.7,0-1,0.1c-0.3,0-0.6,0.1-1,0.1c-0.3,0-0.7,0-1.2-0.2c-0.5-0.2-0.8-0.3-1.1-0.5C23.2,1.4,23,1.2,22.7,1 c-0.2-0.2-0.4-0.4-0.8-0.6c-0.3-0.2-0.7-0.3-1.2-0.4c-0.5,0-0.9,0-1.3,0.1c-0.3,0.1-0.6,0.3-0.9,0.5c-0.3,0.2-0.5,0.4-0.8,0.5 c-0.3,0.1-0.7,0.3-1.2,0.3c-0.5,0.1-0.9,0.1-1.2,0c-0.3-0.1-0.6-0.2-0.9-0.3C14.2,1.1,13.9,1,13.6,1c-0.4,0-0.8,0-1.3,0.2 c-0.5,0.2-0.8,0.4-1.1,0.7c-0.2,0.3-0.4,0.5-0.6,0.8c-0.2,0.3-0.3,0.5-0.5,0.8C9.9,3.7,9.6,4,9.2,4.3C8.8,4.5,8.4,4.7,8.1,4.8 C7.8,4.9,7.5,4.9,7.2,4.9C6.9,5,6.5,5,6.2,5.1C5.9,5.3,5.5,5.5,5.2,5.9C4.8,6.3,4.6,6.6,4.5,7c-0.1,0.3-0.1,0.7-0.2,1 c0,0.3,0,0.6-0.1,1C4.1,9.2,4,9.6,3.7,10c-0.3,0.4-0.5,0.7-0.8,0.9c-0.3,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.5,0.3-0.8,0.6 c-0.2,0.3-0.5,0.6-0.6,1.1c-0.2,0.5-0.2,0.9-0.1,1.3c0,0.4,0.2,0.6,0.3,0.9C1,15.7,1.2,16,1.2,16.3c0.1,0.3,0.1,0.7,0.1,1.2 c0,0.5-0.1,0.9-0.3,1.2c-0.1,0.3-0.3,0.6-0.5,0.8c-0.2,0.3-0.3,0.5-0.4,0.9C0,20.8,0,21.2,0,21.7c0.1,0.5,0.2,0.9,0.4,1.2 c0.2,0.3,0.4,0.5,0.6,0.7c0.2,0.2,0.5,0.4,0.7,0.7c0.2,0.3,0.4,0.6,0.6,1.1c0.2,0.5,0.2,0.8,0.3,1.2c0,0.3,0,0.6-0.1,1 s-0.1,0.6,0,1c0.1,0.4,0.2,0.7,0.5,1.2c0.3,0.4,0.6,0.7,0.9,0.9c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.2,0.9,0.3 c0.3,0.1,0.6,0.4,1,0.7c0.4,0.3,0.6,0.7,0.7,1c0.2,0.3,0.3,0.6,0.4,0.9c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.3,0.5,0.6,1,0.9 c0.5,0.3,0.9,0.4,1.2,0.4c0.4,0,0.7,0,1-0.1c0.3,0,0.6-0.1,1-0.1c0.3,0,0.7,0,1.2,0.2c0.5,0.2,0.8,0.3,1.1,0.5 c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.2,0.4,0.4,0.8,0.6c0.3,0.2,0.7,0.3,1.2,0.4c0.5,0,0.9,0,1.3-0.1c0.3-0.1,0.6-0.3,0.9-0.5 c0.3-0.2,0.5-0.4,0.8-0.5c0.3-0.1,0.7-0.3,1.2-0.3c0.5-0.1,0.9-0.1,1.2,0c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.2 c0.4,0,0.8,0,1.3-0.2c0.5-0.2,0.8-0.4,1.1-0.7c0.2-0.3,0.4-0.5,0.6-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.5-0.5,0.9-0.8 c0.4-0.3,0.8-0.4,1.1-0.5c0.3-0.1,0.6-0.1,0.9-0.2c0.3,0,0.6-0.1,1-0.2c0.3-0.1,0.7-0.3,1.1-0.7c0.4-0.4,0.6-0.8,0.7-1.1 c0.1-0.3,0.1-0.7,0.2-1c0-0.3,0-0.6,0.1-1c0.1-0.3,0.2-0.7,0.5-1.1c0.3-0.4,0.5-0.7,0.8-0.9c0.3-0.2,0.5-0.4,0.8-0.5 c0.3-0.2,0.5-0.3,0.8-0.6c0.2-0.3,0.5-0.6,0.6-1.1c0.2-0.5,0.2-0.9,0.1-1.3C37.4,23.4,37.3,23.1,37.2,22.8"/></svg></button>'
    });
  }

  if (document.querySelector('.slider-three')) {
    $('.slider-three').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 7500,
    	infinite: true,
    	dots: false,
    	arrows: false,
    	responsive: [
  	    {
  	        breakpoint: 900,
  	        settings: {
  	          slidesToShow: 2
  		    }
        },
        {
  		    breakpoint: 450,
  	        settings: {
  	          slidesToShow: 1
  		    }
  	    }
      ]
    });
  }

  if (document.querySelector('.slider-four')) {
    $('.slider-four').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 7500,
    	infinite: true,
    	dots: false,
    	arrows: false,
    	responsive: [
  	    {
  	        breakpoint: 900,
  	        settings: {
  	          slidesToShow: 2
  		    }
        },
        {
  		    breakpoint: 450,
  	        settings: {
  	          slidesToShow: 1
  		    }
  	    }
      ]
    });
  }

  if (document.querySelector('.slider-mobile-two')) {
    $('.slider-mobile-two').slick({
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	infinite: true,
    	autoplay: true,
    	autoplaySpeed: 7500,
    	dots: false,
    	arrows: false,
    	responsive: [
        {
  		    breakpoint: 450,
  	        settings: {
  	          slidesToShow: 1
  		    }
  	    }
      ]
    });
  }

  if (document.querySelector('.screen-filter__button') && document.querySelector('.overlay')) {
    var overlay = $('.overlay');
    var overlayClose = $(overlay).find('.overlay__close');
    var filterBtn = $('.screen-filter__button');

    $(filterBtn).click(function(event) {
      $(overlay).addClass('is-show');
      $(overlayClose).addClass('is-active');
      $('body').toggleClass('is-no-scroll');
    });

    $(overlayClose).click(function() {
      $(this).removeClass('is-active');
      $(overlay).removeClass('is-show');
      $('body').toggleClass('is-no-scroll');
    });
  }

});
