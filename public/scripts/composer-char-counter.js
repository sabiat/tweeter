$(document).ready(function() {
  // --- our code goes here ---


  $("#tweet-text").on('input', function() {
    let remainingChar = 140 - $(this).val().length;
    let counter = $(this).closest('form').find('.counter');
    counter.val(remainingChar);
  });

});