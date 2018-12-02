var navigation = document.querySelector('.header__nav');
var hamburger = document.querySelector('.hamburger');
var hamburgerIcon = hamburger.querySelector('.hamburger__icon');

function openMenuClickHandler() {
  navigation.classList.toggle('header__nav_active');
  hamburgerIcon.classList.toggle('hamburger__icon_active');
}

if (hamburger) {
  hamburger.addEventListener('click', openMenuClickHandler);
}
