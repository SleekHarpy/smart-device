'use strict';

$('body').on('click', '[href*="#"]', function (e) {
  $('html,body').stop().animate({scrollTop: $(this.hash).offset().top}, 1000);
  e.preventDefault();
});

'use strict';

$(document).ready(function () {
  var showChar = 211;
  var ellipsestext = '..';

  $('.about__text-2').each(function () {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moredots">' + ellipsestext + '&nbsp;</span><span class="content_text_feedfull"><span>' + h + '</span>&nbsp;&nbsp;</span>';

      $(this).html(html);
    }
  });
});

'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var ids = ['modal-name', 'modal-phone', 'modal-question'];
  for (var id of ids) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener('change', function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }
});

'use strict';

var ESC_KEYCODE = 27;

var bodyTag = document.querySelector('body');
var buttonCall = document.querySelector('.main-navigation__call');
var modalRequest = document.querySelector('.modal-request');
var modalRequestWrapper = document.querySelector('.modal-request__wrapper');
var buttonClose = modalRequest.querySelector('.modal-request__close');

function onButtonClick() {
  modalRequest.classList.add('modal-request--opened');
  bodyTag.style.overflow = 'hidden';
}

function onButtonCloseClick() {
  modalRequest.classList.remove('modal-request--opened');
  bodyTag.style.overflow = 'auto';
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
      messages: false,
      required: true
    }
  }
});

$('#phone').mask("+7(999)999-9999", {autoclear: false});
$('#modal-phone').mask("+7(999)999-9999", {autoclear: false});
