/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm 
that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array 
of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

const stringMatching = (text, pattern) => {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
  let indicies = [];
  let index = text.indexOf(pattern);

  if(!text || !pattern) return [];

  while(index !== -1) {
    indicies.push(index);
    index = text.indexOf(pattern, index + 1);
  }

  return indicies;

  // [SOLUTION regex]
  
}

console.log(stringMatching("ababcababcabc", "abc"))

module.exports = stringMatching;
