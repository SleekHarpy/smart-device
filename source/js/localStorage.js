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
