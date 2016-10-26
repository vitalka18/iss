$(document).ready(function() {
  mainSlider();
});


function mainSlider() {
  var $mainSlider = $('.js-main-slider');

  $mainSlider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $mainSlider.parent('.main-slider').find('.slick-prev'),
    nextArrow: $mainSlider.parent('.main-slider').find('.slick-next')
  });
}