function createProductsList(products, blockName, isSwiper) {
  const breakpoints = ['320', '768', '1024'],
    $productsList = document.createElement('ul'),
    isSpecials = blockName === 'specials';
  $productsList.classList.add(`${blockName}__list`);

  if (isSwiper) $productsList.classList.add('swiper-wrapper');

  products.forEach(product => {
    const $productsItem = document.createElement('li'),
      $picture = document.createElement('picture'),
      $img = document.createElement('img'),
      $title = document.createElement('h2'),
      $price = document.createElement('span'),
      $btn = document.createElement('a');

    $productsItem.classList.add(`${blockName}__item`, 'product-card', 'card');
    $picture.classList.add('product-card__picture');

    for (const breakpoint of breakpoints) {
      const $source = document.createElement('source');
      $source.media = `(max-width: ${breakpoint}px)`;
      $source.srcset = `img/product-${product.id}-${breakpoint}.png`;
      $picture.append($source);
    }

    $img.classList.add('product-card__img');
    $img.src = `img/product-${product.id}.png`;
    $img.alt = 'Изображение товара';
    $picture.append($img);

    $title.classList.add('product-card__title');
    $title.textContent = product.title;

    $productsItem.append($picture, $title);

    $price.classList.add('product-card__price');
    $price.textContent = `${numberFormat(product.price)} руб`;

    if (isSpecials) {
      const $oldPrice = document.createElement('span'),
        $priceWrapper = document.createElement('span'),
        $discount = document.createElement('p');
      $productsItem.classList.add('product-card_special');
      $oldPrice.classList.add('product-card__old-price');
      $oldPrice.textContent = `${numberFormat(product.oldPrice)} руб`;
      $priceWrapper.classList.add('product-card__price-wrapper');
      $discount.classList.add('product-card__discount');
      $discount.textContent = `- ${numberFormat(product.discount)}`;
      if (product.major) {
        const $scheme = document.createElement('img');
        $scheme.classList.add('product-card__scheme');
        $scheme.src = `img/product-${product.id}-scheme.png`;
        $scheme.alt = 'Схема разборки';
        $productsItem.append($scheme);
      }
      $priceWrapper.append($price, $oldPrice);
      $productsItem.append($priceWrapper, $discount);
    } else {
      const $rating = document.createElement('p');
      $rating.classList.add('product-card__rating', 'rating');
      $rating.textContent = product.rating;
      $productsItem.append($price, $rating);
    }

    if (isSwiper) {
      $productsItem.classList.add('swiper-slide', 'product-card_swiper');
    }

    $btn.href = '/details.html';
    $btn.classList.add('product-card__btn', 'btn', 'btn_secondary');
    $btn.textContent = 'Купить';
    $productsItem.append($btn);

    $productsList.append($productsItem);
  });

  return $productsList;
}

function numberFormat(value) {
  return new Intl.NumberFormat(['ru']).format(value)
}
