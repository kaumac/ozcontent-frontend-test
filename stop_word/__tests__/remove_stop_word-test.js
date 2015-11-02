jest.dontMock('../remove_stop_words');
jest.dontMock('../stop_word_list');

describe('removeStopWords', function() {
 it('should remove the stop words', function() {
   var removeStopWords = require('../remove_stop_words');
   var stopWordList = require('../stop_word_list');
   var text = "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations";
   expect(removeStopWords(text, stopWordList)).toBe("innovate,make,mistakes,admit,quickly,improving,innovations");
 });
});