function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var wordCount = body.split(" ").length.toString();
  return wordCount;
};

Entry.prototype.vowelCount = function(body) {
  var characters = body.toLowerCase().split("")
  // var characters = ["e", "r", "o", "t"]
  var vowelCount = 0
  characters.forEach(function(character){
    // if (character === ("e"||"o")) {
    // old attempt in comment, RegExp handles it super well below
    if (character.match(/^(a|e|i|o|u)$/)) {
      vowelCount += 1;
    }
  })
  return vowelCount;
}

exports.entryModule = Entry;
