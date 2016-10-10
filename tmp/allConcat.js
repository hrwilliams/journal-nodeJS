var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  // console.log("alex & Halle rock");
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var simpleEntry = new Entry("this is a journal entry");
    var output = simpleEntry.wordCount(body);
    console.log("test test");
    $('#count').append(output);
  });
});
