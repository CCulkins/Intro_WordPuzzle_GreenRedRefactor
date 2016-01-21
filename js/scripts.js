
var switchLetter = function(str) {
var regex1 = /[aeiouy]/g;
 return str.replace(regex1, "-");
}

$(document).ready(function() {


  $('form#forma').submit(function(event) {

    var stringToPuzzle = $('textarea#word').val();
    var puzzled = switchLetter(stringToPuzzle);
    $('div.jumbotron').toggle();
    $('div.output').toggle();
    $('span.puzzle').text(puzzled);

  event.preventDefault();
});
});
