/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Function Signature:
function areAnagrams(str1, str2) {
    // Your code here
}

Test Cases:
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false
*/

function areAnagrams(str1, str2) {
  // hash map solution; O(n)
  if(str1.length !== str2.length) return false;

  let charsFound = new Map();
  // set map with chars of str1
  for(let char of str1) {
    charsFound.set(char, (charsFound.get(char) || 0) + 1);
  }
  // if char not found, return false; if found subtract one from map; if value is 0 remove char
  for(let char of str2) {
    if(!charsFound.get(char)) return false;
    charsFound.set(char, (charsFound.get(char) - 1));
    if(charsFound.get(char) === 0) charsFound.delete(char);
  }
  // if size of map is 0; is anagram
  return charsFound.size === 0;

  // On^2 with indexOf
  // if (str1.length !== str2.length) return false;

  // let str2Array = str2.split('');

  // for (let char of str1) {
  //   let index = str2Array.indexOf(char);
  //   if (index === -1) {
  //     return false;
  //   }
  //   str2Array.splice(index, 1);
  // }

  // return true;

  // if (str1.length !== str2.length) return false;

  // for (let i = 0; i < str1.length; i++) {
  //   let found = false; // keep track if char is found
    
  //   // For each character in str1, check for it in str2
  //   for (let j = 0; j < str2.length; j++) {
  //     if (str1[i] === str2[j]) {
  //       found = true;
  //       break;
  //     }
  //   }
    
  //   if (!found) return false;
  // }

  return true;
}


module.exports = areAnagrams;
