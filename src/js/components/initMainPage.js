function initMainPage() {
  const products = getProducts(),
    noDiscountProducts = [],
    discontProducts = products.filter(product => {
      if (!product.discount) {
        noDiscountProducts.push(product);
      }
      return product.discount
    });

  const categories = getCategories(),
    articles = getArticles(),

    $specialsList = createProductsList(discontProducts, 'specials', true),
    $specialsSwiper = document.querySelector('.specials__swiper');

  const $topProductsSection = document.querySelector('.top-products'),
    $topProductsList = createProductsList(noDiscountProducts, 'top-products'),
    $topProductsItems = $topProductsList.childNodes;

  let shownProductsQty;
  if (matchMedia('(max-width: 1919px)').matches) {
    shownProductsQty = 6;
  } else shownProductsQty = 8;
  const shownProductsStep = shownProductsQty / 2;

  $topProductsBtn = createBtn('top-products', 'primary', 'Смотреть больше товаров', () => {
    for (let i = 0; i < shownProductsStep; i++) {
      if (shownProductsQty === $topProductsItems.length) {
        $topProductsBtn.classList.add('d-none');
        break;
      }
      $topProductsItems[shownProductsQty].classList.remove('d-none');
      shownProductsQty += 1;
    }
  });

  $topProductsSection.append($topProductsList, $topProductsBtn);
  for (let i = shownProductsQty; i < $topProductsItems.length; i++) {
    $topProductsItems[i].classList.add('d-none');
  }

  $topCategoriesSection = document.querySelector('.categories'),
    $topCategoriesList = createCategoriesList(categories),

    $articlesSwiper = document.querySelector('.articles__swiper'),
    $articlesList = createArticlesList(articles);

  $specialsSwiper.append($specialsList);

  $topCategoriesSection.append($topCategoriesList);
  $articlesSwiper.append($articlesList);

  initSwipers('main');

  createValidator('.application__form', ['name', 'tel', 'email']);
}
