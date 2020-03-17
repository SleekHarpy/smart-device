'use strict';

var introAnchorLink = $('.intro__anchor-link');
var featuresAnchor = $('.features');
var introButton = $('.intro__button');
var contactsAnchor = $('.contacts');

function anchorScroll(link, anchor) {

  link.on('click', function(e){
    $('html,body').stop().animate({ scrollTop: anchor.offset().top }, 1000);
    e.preventDefault();
  });

};

anchorScroll(introAnchorLink, featuresAnchor);
anchorScroll(introButton, contactsAnchor);

'use strict';

var size = 211;
var aboutText1 = $('.about__text-1');
var aboutText2 = $('.about__text-2');

function cropText(element) {
  var newsContent = element;
  var newsText = newsContent.text();

  if (newsText.length > size) {
    newsContent.text(newsText.slice(0, size) + '..');
  }
}

$(window).resize(function () {
  if (document.documentElement.clientWidth < 1023) {
    cropText(aboutText1);
    cropText(aboutText2);
  }
});

'use strict';

var ESC_KEYCODE = 27;

var common = document.querySelector('.common');
var buttonCall = document.querySelector('.main-navigation__call');
var modalRequest = document.querySelector('.modal-request');
var modalRequestWrapper = document.querySelector('.modal-request__wrapper');
var buttonClose = modalRequest.querySelector('.modal-request__close');

function onButtonClick() {
  modalRequest.classList.add('modal-request--opened');
  common.style.overflow = 'hidden';
}

function onButtonCloseClick() {
  modalRequest.classList.remove('modal-request--opened');
  common.style.overflow = 'auto';
}

var onModalEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onButtonCloseClick();
  }
};

buttonCall.addEventListener('click', onButtonClick);
buttonClose.addEventListener('click', onButtonCloseClick);
modalRequest.addEventListener('click', onButtonCloseClick);
modalRequestWrapper.addEventListener('click', function (e) {
  e.stopPropagation();
});
document.addEventListener('keydown', onModalEscPress);

'use strict';

jQuery.validator.addMethod("checkMask", function(value, element) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$('form').validate({
  rules: {
    phone: {
      checkMask: true,
      messages: false
    }
  },
  messages: {
    phone: {
      checkMask: "Введите полный номер телефона"
    },
    name: "Введите Ваше имя",
  }
});

$('#phone').mask("+7(999)999-9999", {autoclear: false});
$('#modal-phone').mask("+7(999)999-9999", {autoclear: false});
