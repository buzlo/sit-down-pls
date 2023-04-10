function addSearchCategoriesToSelect($select) {
  const searchCategories = getSearchCategories();

  searchCategories.forEach(category => {
    const $option = document.createElement('option');

    $option.classList.add('search__option');
    $option.textContent = category.title;
    $option.value = category.id;

    $select.append($option);
  });
}
