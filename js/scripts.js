
var switchLetter = function(str) {
var regex1 = /[aeiouy]/g;
 return str.replace(regex1, "-");
}

$(document).ready(function() {


  $('form#forma').submit(function(event) {
    var stringToPuzzle = $('input#word').val();
    var puzzled = switchLetter(stringToPuzzle);
    $('span.puzzle').text(puzzled);

  event.preventDefault();
});
});
