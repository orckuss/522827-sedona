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
    var inputRequired = $(".form-reviews__input[required]");
    for (var i = 0; i < inputRequired.length; i++) {
      $(inputRequired[i]).removeClass("form-reviews__input--error");
      if (!$(inputRequired[i]).val()) {
        $(inputRequired[i]).addClass("form-reviews__input--error");
      }
    }
    if (inputRequired.hasClass("form-reviews__input--error")) {
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
  $(window).keydown(function(evt) {
    if (evt.keyCode === 27 && $(".js-popup-error, .js-popup-success").css("display") === "block") {
      $(".js-popup-error, .js-popup-success").fadeOut("fast");
    }
  });
});
