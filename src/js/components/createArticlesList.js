function createArticlesList(articles) {
  const breakpoints = ['320', '768', '1024'],
    $articlesList = document.createElement('ul');
  $articlesList.classList.add('articles__list');

  $articlesList.classList.add('swiper-wrapper');

  articles.forEach(article => {
    const $articlesItem = document.createElement('li'),
      $picture = document.createElement('picture'),
      $img = document.createElement('img'),
      $title = document.createElement('h2'),
      $btn = document.createElement('button');

    $articlesItem.classList.add('articles__item', 'article-card', 'card', 'swiper-slide');

    for (const breakpoint of breakpoints) {
      const $source = document.createElement('source');
      $source.media = `(max-width: ${breakpoint}px)`;
      $source.srcset = `img/article-${article.id}-${breakpoint}.png`;
      $picture.append($source);
    }

    $img.classList.add('article-card__img');
    $img.src = `img/article-${article.id}.png`;
    $picture.classList.add('article-card__picture')
    $picture.append($img);

    $title.classList.add('article-card__title');
    $title.textContent = article.title;

    $btn.classList.add('article-card__btn', 'btn', 'btn_secondary');
    $btn.textContent = 'Читать';

    $articlesItem.append($picture, $title, $btn);

    $articlesList.append($articlesItem);
  });

  return $articlesList;
}
