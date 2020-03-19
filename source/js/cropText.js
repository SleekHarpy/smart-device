'use strict';

var size = 211;
var tabletWidth = 1023;
var aboutText1 = $('.about__text-1');
var aboutText2 = $('.about__text-2');

function cropText(element) {
  var newsContent = element;
  var newsText = newsContent.text();

  if (newsText.length > size) {
    console.log(newsContent);
    newsContent.text(newsText.slice(0, size) + '..');
  }
}

$(window).resize(function () {
  if (document.documentElement.clientWidth <= tabletWidth) {
    cropText(aboutText1);
    cropText(aboutText2);
  }
  if (document.documentElement.clientWidth > tabletWidth) {
    window.location.reload(true);
  }
});
