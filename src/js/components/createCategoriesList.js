function createCategoriesList(categories) {
  const breakpoints = ['320', '768', '1024'],
    $categoriesList = document.createElement('ul');
  $categoriesList.classList.add('categories__list');

  categories.forEach(category => {
    const $categoriesItem = document.createElement('li'),
      $subCategoriesList = document.createElement('ul'),
      $title = document.createElement('h2'),
      $picture = document.createElement('picture'),
      $img = document.createElement('img'),
      $btn = document.createElement('a'),
      $btnSpan = document.createElement('span'),
      $svg = createSvg(['../img/svg/sprite.svg#arrow-right']);

    $categoriesItem.classList.add('categories__item', 'category-card', 'card');

    $subCategoriesList.classList.add('category-card__subcategories-list');

    for (const subCategory of category.subCategories) {
      const $subCategoriesItem = document.createElement('li'),
        $subCategoriesLink = document.createElement('a');
      $subCategoriesItem.classList.add('category-card__subcategories-item');
      $subCategoriesLink.classList.add('category-card__subcategories-link');
      $subCategoriesLink.href = "#";
      $subCategoriesLink.textContent = subCategory.title;
      $subCategoriesItem.append($subCategoriesLink);
      $subCategoriesList.append($subCategoriesItem);
    }

    $title.classList.add('category-card__title');
    $title.textContent = category.title;

    for (const breakpoint of breakpoints) {
      const $source = document.createElement('source');
      $source.media = `(max-width: ${breakpoint}px)`;
      $source.srcset = `img/category-${category.id}-${breakpoint}.png`;
      $picture.append($source);
    }

    $img.classList.add('category-card__img');
    $img.src = `img/category-${category.id}.png`;
    $picture.classList.add('category-card__picture')
    $picture.append($img);

    $btn.href = '#';
    $svg.setAttribute('width', '22');
    $svg.setAttribute('height', '22');
    $btn.append($svg);

    const $titleBtn = $btn.cloneNode(true);
    $btn.classList.add('category-card__btn', 'btn', 'btn_arrow');
    $btnSpan.textContent = 'В каталог';
    $btn.prepend($btnSpan);

    $titleBtn.classList.add('category-card__title-btn', 'btn', 'btn_arrow');
    $title.append($titleBtn);

    $categoriesItem.append($subCategoriesList, $title, $picture, $btn);

    $categoriesList.append($categoriesItem);
  });

  return $categoriesList;
}
