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
