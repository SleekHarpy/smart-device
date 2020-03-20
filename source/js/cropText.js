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
