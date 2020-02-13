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
    });

});