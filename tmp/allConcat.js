var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var simpleEntry = new Entry("this is a journal entry");
    var wordCountOutput = simpleEntry.wordCount(body);
    var vowelCountOutput = simpleEntry.vowelCount(body);
    $('#wordCount').append(wordCountOutput);
    $('#vowelCount').append(vowelCountOutput);
  });
});
