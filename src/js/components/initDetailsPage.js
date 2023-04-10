function initDetailsPage() {
  const similarProducts = getProducts([22, 17, 23, 13]);

  const $similarProductsList = createProductsList(similarProducts, 'similar-products', true),
    $similarProductsSwiper = document.querySelector('.similar-products__swiper');

  $similarProductsSwiper.append($similarProductsList);

  initSwipers('details');
}
