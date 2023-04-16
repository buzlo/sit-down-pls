const choicesIconParams = {
  svgUrl: './img/svg/sprite.svg#arrow-down',
  svgWidth: '11',
  svgHeight: '11',
};
const $regionSelect = document.querySelector('.region__select');
createChoicesFromSelect($regionSelect, 'region', choicesIconParams);

const $searchSelect = document.querySelector('.search__select');
addSearchCategoriesToSelect($searchSelect);
createChoicesFromSelect($searchSelect, 'search', choicesIconParams);

addBurgerListeners();
