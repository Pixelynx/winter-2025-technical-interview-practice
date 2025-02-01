// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.
// remove spaces from both strings
// convert both strings to lowercase
// sort both strings
// compare sorted strings
// return true if they're equal, else false

function areAnagrams(str1, str2) {
    const prepare = (s) => s.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    return prepare(str1) === prepare(str2);
}

console.log(areAnagrams("aba", "baa"));
console.log(areAnagrams("hub", "huc"));

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?
// remove spaces from both strings
// if lengths are different, return false
// ceate object where each key is a char from str1, and the value is how many times that character appears in str1
// iterate through str2
  // if character not in object or count is 0, return false
  // decrement count in object
// return true if all checks pass

function areAnagramsNoSort(str1, str2) {
    const noSpace = (s) => s.replace(/\s/g, '');
    str1 = noSpace(str1);
    str2 = noSpace(str2);

    if(str1.length !== str2.length) return false;

    const charCount = {};
    for(let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str2) {
        if(!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}
  
console.log(areAnagramsNoSort("aba", "baa"));
console.log(areAnagramsNoSort("hub", "huc"));

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

// both strings; create obj where each key is a char from str, and the value is how many times that character appears in str
// initialize a count variable to 0
// for each character in the combined objects:
    // for each character, find the diff between how many times it appears in str1 and how many times it appears in str2
    // Add this difference to count
// return count divided by 2 since each difference is counted twice

function charsToMakeAnagram(str1, str2) {
    const charCount1 = {}, charCount2 = {};

    for(let char of str1) charCount1[char] = (charCount1[char] || 0) + 1;
    for(let char of str2) charCount2[char] = (charCount2[char] || 0) + 1;

    let diff = 0;
    for(let char in { ...charCount1, ...charCount2 }) {
        diff += Math.abs((charCount1[char] || 0) - (charCount2[char] || 0));
    }

    return diff / 2;
}

console.log(charsToMakeAnagram("abad", "abcd"));
console.log(charsToMakeAnagram("aabb", "baba"));

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8
