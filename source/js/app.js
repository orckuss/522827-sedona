var menu = document.querySelector('.js-menu');
var menuToggle = menu.querySelector('.js-menu-btn');

menu.classList.remove('nav--nojs');

menuToggle.addEventListener('click', function() {
  if (menu.classList.contains('nav--closed')) {
    menu.classList.remove('nav--closed');
    menu.classList.add('nav--opened');
  } else {
    menu.classList.remove('nav--opened');
    menu.classList.add('nav--closed');
  }
});
