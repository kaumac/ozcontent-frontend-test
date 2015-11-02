# Stop words test

## Install dependencies
Using NVM is optional, you just need to have Node > 4.0. But if you have NVM there's a version file.
```
nvm install && nvm use
npm install
```

## Run the test
```
npm test
```

## Input string
```
The "removeStopWords" method takes 2 parameters: "text" and "stopWordList", to keep it organized I put stopWordList as an export on the unit test. To test a different text just change the "text" variable on "__tests__/remove_stop_words-test.js:8".