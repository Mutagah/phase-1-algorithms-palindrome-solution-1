function reverse(word){
  return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  return word === reversedWord
}

/* 
  Add your pseudocode here
  reverse the input string
  if input string equals the reversed string
    return true 
    else 
    return false
*/

/*
  Add written explanation of your solution here
*/
/*
    rewriting the problem in own words

    Write a function that takes in an input string returns true if the reversed string matches 
    the input string and false if otherwise.
    
          Test Cases
    Example : mom === mom // true
              dad === dad//true
              hey === yeh //false
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("mutaga"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));


}

module.exports = isPalindrome;
