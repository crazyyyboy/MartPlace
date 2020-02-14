$(function(){

   $('.items__category').on('click', function(){
      $('.items__category-down').slideToggle();
    });

    $(".slider__items-star").rateYo({
      starWidth: "15px",
      rating: 5,
    });

    $('.slider__inner').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev slick-arrow"><img src="images/left.png" alt=""></button>',
      nextArrow: '<button class="slick-next slick-arrow"><img src="images/right.png" alt=""></button>',
    });

    $('.slider-2__inner').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button class="slick-prev slick-arrow"><img src="images/left.png" alt=""></button>',
      nextArrow: '<button class="slick-next slick-arrow"><img src="images/right.png" alt=""></button>',
    });

    var mixer = mixitup('.product__inner-box');

});