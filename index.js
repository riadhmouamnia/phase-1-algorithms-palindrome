function isPalindrome(word) {
  // Write your algorithm here
  let reverseIndex = word.length - 1;
  let result;
  for (let i in word) {
    if (word[i] === word[reverseIndex]) {
      result = true;
    } else {
      result = false;
    }
    reverseIndex--;
  }
  return result;
}

/* 
  Add your pseudocode here
  1- Create a tracing reverse index starting from the ending index of that string
  2- Create a new result variable that will hold the result of the comparison
  3- Loop for each letter in the word in the index and check if it's equal to the word in the reverse index 
  and decrement the reverse index in each iteration of the loop
  4- Set the result to true if it's equal to the word in the reverse index and false if it's not equal
  5- Return the result
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
