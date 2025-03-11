function isPalindrome(s) {
    // redeclare string with any special characters removed
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // create left pointer for start
    let left = 0;
    // create right pointer for end
    let right = s.length - 1;
    // if string is <= 1, return true
    if (s.length <= 1) return true;
    // while left < right
    while (left < right) {
        // if left != right
        if (s[left] !== s[right]) {
            // return false
            return false;
            }
        left++;
        right--;
    }
    // return true
    return true;
}

// Positive test cases
console.log("**~TRUE~**");
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("Madam Im Adam")); // true
console.log(isPalindrome("1221")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true

// Negative test cases
console.log("**~FALSE~**");
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("OpenAI")); // false
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("12345")); // false

// Edge cases
console.log("**~TRUE EDGE~**");
console.log(isPalindrome("A")); // true
console.log(isPalindrome(" ")); // true
console.log(isPalindrome(".,;")); // true
