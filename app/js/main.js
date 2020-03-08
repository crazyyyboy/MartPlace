$(function () {

   $('.items__category').on('click', function () {
      $('.items__category-down').slideToggle();
   });

   $('.header__menu-btn').on('click', function () {
      $('.menu-list').slideToggle();
   });

   $('.header__menu-adaptiv').on('click', function () {
      $('.header__inner-text').toggleClass('header__inner-text-disable');
      $('.header__inner-img').toggleClass('header__inner-img-disable');
      $('.header__inner-login').toggleClass('header__inner-login-active');
   });

   $('.dropdown__menu-home').on('click', function(){
      $('.header__dropdown-home').toggleClass('active');
   });
   $('.dropdown__menu-product').on('click', function(){
      $('.header__dropdown-product').toggleClass('active');
   });
   $('.dropdown__menu-wordpress').on('click', function(){
      $('.header__dropdown-wordpress').toggleClass('active');
   });
   $('.dropdown__menu-pages').on('click', function(){
      $('.header__dropdown-pages').toggleClass('active');
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
      responsive: [
         {
           breakpoint: 1200,
           settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
           }
         },
         {
            breakpoint: 860,
            settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
            }
          },
      ]
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

   $('.corporate__tabs .tab, .blog__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.corporate__tabs, .blog__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.corporate__tabs .tabs, .blog__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('input[type="checkbox"]').styler();

   var mixer = mixitup('.product__inner-box, .content-row__inner');

});