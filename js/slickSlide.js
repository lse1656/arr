$(document).ready(function () {
  $('.visual-slider-wrap').slick({
    adaptiveHeight: '456px',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    autoplay: true,
  });

  $('.recom-product-slider .slider').slick({
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.review-list').slick({
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1280,
        draggable: false,
      },
    ],
  });
});
