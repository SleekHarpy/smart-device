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
