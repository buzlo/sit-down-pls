function createChoicesFromSelect($select, blockName, { svgUrl, svgWidth, svgHeight } = {}) {
  const choices = new Choices($select, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
  const $choices = choices.containerOuter.element;
  if (blockName) $choices.classList.add(`${blockName}__choices`);
  if (svgUrl) {
    const $svg = createSvg([svgUrl]);
    $svg.classList.add('choices__svg');
    $svg.setAttribute('width', svgWidth);
    $svg.setAttribute('height', svgHeight);
    $choices.append($svg);
  }
  return choices;
}
