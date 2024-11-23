$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.nav-otr').addClass('top-header-fixed');
    }
    else{
        $('.nav-otr').removeClass('top-header-fixed');
    }
})   

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
  });


  var swiper = new Swiper("#love", {
    slidesPerView: 5,
spaceBetween: 20,
loop: true,
pagination: {
    clickable: true,
},
});