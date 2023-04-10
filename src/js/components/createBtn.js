function createBtn(blockName, modifier, text, onClick) {
  const $btn = document.createElement('button');
  $btn.classList.add(`${blockName}__btn`, 'btn', `btn_${modifier}`);
  $btn.textContent = text;
  $btn.addEventListener('click', () => onClick());
  return $btn;
}
