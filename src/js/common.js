$(document).ready(function() {
  mainSlider();
  popularSlider();
  testimonialSlider();
  testimonialGallery();
  cardGallery();
  videoSlider();
  if ( $(window).width() > 991) {
    if (!$('.js-category-menu').hasClass('slick-initialized')) {
      categoryMenu();
    }
  } else {
    if ($('.js-category-menu').hasClass('slick-initialized')) {
      $('.js-category-menu').slick('unslick');
    }
  }

  $(window).resize(function() {
    $('.aside-link-group').css({
      'height': $('.aside-link-group__inner').outerHeight()
    });
    if ( $(window).width() > 991 ) {
      if (!$('.js-category-menu').hasClass('slick-initialized')) {
        categoryMenu();
      }
    } else {
      if ($('.js-category-menu').hasClass('slick-initialized')) {
        $('.js-category-menu').slick('unslick');
      }
    }
  });
  
  $(document).on('change', '.input-upload input', function(ev) {
    var $that = $(this);
    var $out = $that.closest('.input-upload');
    var $text = $out.find('.link-underline');
    if ( $that.val().length > 0 ) {
      $text.text( $that.val().replace(/.*[\/\\]/, '') );
    } else {
      $text.text( $text.data('text') );  
    }
  });

  $('.js-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.m-menu__open-submenu').on('click', function(e){
    e.preventDefault();

    var $selector = $(this).closest('.m-menu__item_has-sub-menu').find('> .m-menu__sub');
    var $that = $(this);

    if( !$that.hasClass('opened') ) {
      $selector.slideDown(300, function(){
        $that.addClass('opened');
      });
    } else {
      $selector.slideUp(300, function() {
        $that.removeClass('opened');
      });
    }
  });

  $(document).on('click', '.js-open-menu', function() {
    $('.m-navigation').fadeIn(300);
  });

  $(document).on('click', '.js-close-m-menu', function() {
    $('.m-navigation').fadeOut(300);
  });

  $("input[type=tel]").inputmask("+7(999)999-99-99");

  $('.aside-link-group').css({
    'height': $('.aside-link-group__inner').outerHeight()
  });

  $(window).scroll(function() {
    var wh = $(window).outerHeight();
    var $el = $('.aside-link-group');
    if ($el.length) {
      var $elHeight = $el.height();
      var offsetTop = $el.offset().top + $elHeight;
      var scrollTop = $(document).scrollTop();
      if (wh > offsetTop - scrollTop && $(window).width() > 991) {
        $('.aside-link-group__inner').addClass('fixed');
      } else {
        $('.aside-link-group__inner').removeClass('fixed');
      }
    }
    
  });
});


function mainSlider() {
  var $mainSlider = $('.js-main-slider');

  $mainSlider.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    cssEase: 'linear',
    prevArrow: $mainSlider.parent('.main-slider').find('.slick-prev'),
    nextArrow: $mainSlider.parent('.main-slider').find('.slick-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
        }
      },
    ]
  });
}

function videoSlider() {
  var $slider = $('.js-video-gallery'),
      slideToshow = $slider.data('slides-to-show') || 5;
  $slider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: '',
    nextArrow: $slider.parent().find('.slick-testimonial-next'),
    slidesToShow: slideToshow,
    slideToScroll: 1,
  });
}

function categoryMenu() {
  var $slider = $('.js-category-menu');
  $slider.slick({
    dots: false,
    infinite: false,
    speed: 500,
    prevArrow: '',
    nextArrow: $slider.parent().find('.slick-testimonial-next'),
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          unslick: true       
        }
      },
    ]
  });

  $slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    if ( $slider.parent().find('.slick-testimonial-next').hasClass('slick-disabled') ) {
      $slider.slick('slickGoTo', 0);
    }
  });
}

function popularSlider() {
  var $slider = $('.js-popular-slider'),
      slideToshow = $slider.data('slides-to-show') || 5;
  $slider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: slideToshow,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4        
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2        
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1    
        }
      },
    ]
  });
}

function testimonialSlider() {
  var $testimonial = $('.js-testimonial-slider'),
      $sliderParent = $testimonial.parent('.testimonial-slider-wrap'),
      slideToshow = $testimonial.data('slides-to-show') || 1;

  $testimonial.slick({
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    cssEase: 'linear',
    slidesToShow: slideToshow,
    slideToScroll: 1,
    appendDots: $sliderParent.find('.testimonial-slider-dots'),
    prevArrow: $sliderParent.find('.slick-testimonial-prev'),
    nextArrow: $sliderParent.find('.slick-testimonial-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1        
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1        
        }
      },
    ]
  });
}

function testimonialGallery() {
  $('.js-testimonial-gallery').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    }
  });
}

function cardGallery() {
  var $cardGallery = $('.js-card-gallery'),
      $cardGalleryPag = $('.js-card-gallery-pag'),
      slideToshow = $cardGalleryPag.data('slides-to-show') || 5;

   $cardGallery.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.js-card-gallery-pag',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true
        }
      }
    ]
  });

  $cardGalleryPag.slick({
    slidesToShow: slideToshow,
    slidesToScroll: 1,
    asNavFor: '.js-card-gallery',
    arrows: false,
    focusOnSelect: true
  });

  $('.js-card-gallery-img, .js-objects-gallery-img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true
    }
  });
}