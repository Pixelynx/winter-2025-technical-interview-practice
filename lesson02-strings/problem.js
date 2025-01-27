/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for(let i = 0; i < s.length; i++) {
    let seen = new Set();
    let currLen = 0;

    for(let j = i; j < s.length; j++) {
      if(seen.has(s[j])) {
        break;
      }
      seen.add(s[j]);
      currLen++;
    }

    maxLength = Math.max(maxLength, currLen);
  }

  return maxLength;
}


module.exports = lengthOfLongestSubstring;
