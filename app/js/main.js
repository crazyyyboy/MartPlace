$(function () {

   $('.items__category').on('click', function () {
      $('.items__category-down').slideToggle();
   });

   $(".slider__items-star, .rate-star").rateYo({
      starWidth: "15px",
      rating: 5,
   });

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 330,
      from: 30,
      to: 300,
      prefix: "$"
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

   $('.favourites__wrapper').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev slick-arrow"></button>',
      nextArrow: '<button class="slick-next slick-arrow"></button>',
   });



   $('.page__button-colum').on('click', function () {
      $('.new-items__item').addClass('list');
      $('.page__button-colum').addClass('active');
      $('.page__button-row').removeClass('active');
   });

   $('.page__button-row').on('click', function () {
      $('.new-items__item').removeClass('list');
      $('.page__button-row').addClass('active');
      $('.page__button-colum').removeClass('active');
   });

   $('.corporate__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.corporate__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.corporate__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   var mixer = mixitup('.product__inner-box, .content-row__inner');

});