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
