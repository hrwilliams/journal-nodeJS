var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var simpleEntry = new Entry("this is a journal entry");
    var output = simpleEntry.wordCount(body);
    $('#count').append(output);
  });
});
