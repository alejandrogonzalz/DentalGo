console.log('Hello everybody'); 

// === SWIPER ===

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
  });


// === VIDEO ===
  var player = videojs("dg-video",{
      fluid:true
    
  });

// === SIDEBAR CLOSE ===
  const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle");

  toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
  })

  searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
  })