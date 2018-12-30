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

$(document).ready(function() {
  $(".js-submit").click(function(evt) {
    if (!$("#name").val() || !$("#lastname").val() || !$("#phone").val() || !$("#email").val()) {
      evt.preventDefault();
      $(".js-popup-error").fadeIn("fast");
    }
  });
  $(".js-submit").parent().submit(function() {
    $(".js-popup-success").fadeIn("fast");
  });
  $(".js-popup-close").click(function() {
    $(".js-popup-error, .js-popup-success").fadeOut("fast");
  });
});
