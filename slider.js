<<<<<<< HEAD
 // swiper

 const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    slidesPerView: 1.8,  
    centeredSlides: true, 
    spaceBetween: 30, 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },  // Small phones
        640: { slidesPerView: 1, spaceBetween: 20, navigation: {
          enabled: false,
        } }, // Bigger phones
        768: { slidesPerView: 1, spaceBetween: 30, navigation: {
          enabled: true,
        } },  // Tablets
        1024: { slidesPerView: 1.8, spaceBetween: 40, navigation: {
          enabled: true,
        } }  // Desktops
      }


=======
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


>>>>>>> 624cdeb35c3f77c7a308793d548ae4aa52a823af
  });