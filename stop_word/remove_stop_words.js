function removeStopWords(text, stopWordList) {
  var splitTextRegExp = /(\b[^\s]+\b)/g;
  var wordsArray = text.match(splitTextRegExp);
  var parsedText = [];
  for (var word of wordsArray) {
  	// search mathod on JS is a bit messy, I can't do case sensitive searches using variables as strings,
  	// so I had to convert the word to lovercase here
  	var isntStopWord = stopWordList.search(word.toLowerCase()) === -1;
  	if(isntStopWord) {
  		parsedText.push(word);
  	}
  }
  return parsedText.join();
}
module.exports = removeStopWords;