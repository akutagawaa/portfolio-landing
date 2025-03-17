 // swiper

 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // breakpoints: {
      //   740: {
      //     slidesPerView: 1.25,
      //     spaceBetween: 20
      //   },
      //   1024: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   }
      // }


  });