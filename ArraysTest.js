const promptIndex = require('prompt-sync')();
const promptArraySize = require('prompt-sync')();
var userInput, ArrIndex;
var testArray = {};

ArrIndex = promptArraySize('Enter array size: ');

for (let index = 0; index < ArrIndex; index++) {
    userInput = '';
    userInput = promptIndex('Enter array value: ');
    testArray[index] = userInput;
}

for (let index = 0; index < ArrIndex; index++) {
    console.log(testArray[index]);
}





