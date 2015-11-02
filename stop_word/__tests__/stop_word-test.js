jest.dontMock('../removeStopWords');
jest.dontMock('../stopWordList');

describe('removeStopWords', function() {
 it('should remove the stop words', function() {
   var removeStopWords = require('../removeStopWords');
   var stopWordList = require('../stopWordList');
   var text = "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations";
   expect(removeStopWords(text, stopWordList)).toBe("innovate mistakes admit quickly improving innovations");
 });
});