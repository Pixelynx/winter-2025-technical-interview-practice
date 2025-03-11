// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
// const hasDuplicate = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// MAP SOLUTION
const hasDuplicate = (nums) => {
    if (nums.length < 2) return false;

    let dupMap = new Map();
    for (let num of nums) {
        if (dupMap.get(num) >= 1) return true;
        dupMap.set(num, (dupMap.get(num) || 0) + 1);
    }
    return false;
};

// console.log("Testing hasDuplicate:");
// console.log("Input: [1, 2, 3, 4, 5], Expected: false, Result:", hasDuplicate([1, 2, 3, 4, 5]));
// console.log("Input: [1, 2, 3, 4, 1], Expected: true, Result:", hasDuplicate([1, 2, 3, 4, 1]));
// console.log("Input: [1, 1, 1, 1, 1], Expected: true, Result:", hasDuplicate([1, 1, 1, 1, 1]));
// console.log("Input: [], Expected: false, Result:", hasDuplicate([]));
// console.log("Input: [1], Expected: false, Result:", hasDuplicate([1]));
// console.log("\n");
  

// // Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
// const countLetterOccurrences = (str1, str2) => {
//     let count = 0;
//     for (let char of str1) {
//       for (let i = 0; i < str2.length; i++) {
//         if (char === str2[i]) {
//           count++;
//         }
//       }
//     }
//     return count;
//   };

// MAP SOLUTION

const countLetterOccurrences = (str1, str2) => {
    let occurrences = new Map();

    // Loop through first string to initialize the map with letter occurrences in str1
    // Separate loop through str2 and check if the letter occurs in the map; if it does, subtract 1
    for (let char in str1) {
        if (occurrences.get(char))
            occurrences.set(char, (occurrences.get(char) || 0) + 1);
    }

    for (let char in str2) {
        if (occurrences.get(char))
            occurrences.set(char, (occurrences.get(char) || 0) - 1);
    }
}
  
console.log("Testing countLetterOccurrences:");
console.log("Input: ('abc', 'abracadabra'), Expected: 4, Result:", countLetterOccurrences('abc', 'abracadabra'));
console.log("Input: ('hello', 'world'), Expected: 1, Result:", countLetterOccurrences('hello', 'world'));
console.log("Input: ('abc', 'def'), Expected: 0, Result:", countLetterOccurrences('abc', 'def'));
console.log("Input: ('aaa', 'aaaaaa'), Expected: 6, Result:", countLetterOccurrences('aaa', 'aaaaaa'));
console.log("Input: ('', 'aaaaaa'), Expected: 0, Result:", countLetterOccurrences('', 'aaaaaa'));
console.log("\n");

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
    let maxDiff = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let diff = Math.abs(nums[i] - nums[j]);
        if (diff > maxDiff) {
          maxDiff = diff;
        }
      }
    }
    return maxDiff;
  };
  
// MAP SOLUTION

// console.log("Testing maxDifference:");
// console.log("Input: [1, 2, 3, 4, 5], Expected: 4, Result:", maxDifference([1, 2, 3, 4, 5]));
// console.log("Input: [5, 4, 3, 2, 1], Expected: 4, Result:", maxDifference([5, 4, 3, 2, 1]));
// console.log("Input: [1, 5, 2, 8, 3], Expected: 7, Result:", maxDifference([1, 5, 2, 8, 3]));
// console.log("Input: [1, 1, 1, 1, 1], Expected: 0, Result:", maxDifference([1, 1, 1, 1, 1]));
// console.log("Input: [], Expected: 0, Result:", maxDifference([]));