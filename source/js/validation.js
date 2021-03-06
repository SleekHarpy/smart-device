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
