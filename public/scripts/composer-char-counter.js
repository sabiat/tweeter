$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    let remainingChar = 140 - $(this).val().length;
    const counter = $(this).closest('form').find('.counter');
    counter.val(remainingChar);
    if (counter.val() < 0) {
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }
  });


});