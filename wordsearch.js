const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
const wordSearch = function(array, word) {
//Creates array of the word
  let wordArray = word.split('');
  //Creates horizontal/verticle values which should return false
  let horizontal = false;
  let verticle = false;
  //First for loop checks whether the word is found in any row (subArray) in the array
  for (let i = 0; i < wordArray.length; i++) {
    if (eqArrays(array[i], wordArray)) {
      horizontal = true;
    }
  }
  //Second for loop checks whether the word is found in any column in the array
  for (let i = 0; i < wordArray[0].length; i++) {
  //Creates a newArray each time the first for loop goes
    let newArray = [];
    //Iterates through the outer loop
    for (let j = 0; j < wordArray.length; j++) {
      //Pushes that value to the newArray
      newArray.push(wordArray[j][i]);
      console.log(newArray);
    }
    //If the wordArray and newArray are equal, we know the word can be found
    if (eqArrays(newArray, wordArray)) {
      verticle = true;
    }
  }
  //If either horizontal or verticle are true the function returns true
  return console.log(horizontal || verticle);
};
//for loop through the inner array (0, 1, 2, 3)
//nested for loop for the outer array (0, 1, 2, 3)
//
//Test for equal arrays makes the function much easier to read.
let array1 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
];
let word1 = '2222';
wordSearch(array1, word1);