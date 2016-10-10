function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var output = body.split(" ").length.toString();
  return output;
};

exports.entryModule = Entry;
