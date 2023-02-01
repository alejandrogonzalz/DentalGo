console.log('Hello everybody'); 

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    autoplay:{
      delay:5000,
      disableOnInteraction: false,  
    },
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })