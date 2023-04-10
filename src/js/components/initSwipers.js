function initSwipers(pageName) {
  if (pageName === 'main') {
    const heroSwiper = new Swiper('.hero__swiper', {
      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
      a11y: {
        paginationBulletMessage: "Перейти к слайду {{index}}"
      }
    });

    const specialsSwiper = new Swiper('.specials__swiper', {
      navigation: {
        nextEl: '.specials__next',
        prevEl: '.specials__prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 32,
    });

    const articlesSwiper = new Swiper('.articles__swiper', {
      navigation: {
        nextEl: '.articles__next',
        prevEl: '.articles__prev',
      },
      slidesPerView: 1,
      spaceBetween: 32,
      breakpoints: {
        1920: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  if (pageName === 'details') {

    const similarProductsSwiper = new Swiper('.similar-products__swiper', {
      navigation: {
        nextEl: '.similar-products__next',
        prevEl: '.similar-products__prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 32,
      breakpoints: {
        320: {
          spaceBetween: 16,
        },
      },
    });
  }
}

