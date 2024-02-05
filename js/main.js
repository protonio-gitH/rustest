new Swiper('.slider-first ', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween:20,
    speed: 5000,
    allowTouchMove:false,
    autoplay: {
        enabled: true,
        delay: 1,
      },
    
});

new Swiper('.slider-second ', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween:20,
    speed: 5000,
    allowTouchMove:false,
    autoplay: {
        enabled: true,
        delay: 1,
        reverseDirection: true,
      },
    
});