// 1. given a string with three characters, return the second character
function getSecondChar(str) {
    return str[1];
}
console.log(getSecondChar('kitty')); // Expected: 'i'

// 2. get the second and third char from a string. the string will always have atleast three characters
function getSecondAndThirdChar(str) {
    return str.slice(1, 3);
}
console.log(getSecondAndThirdChar('kitty')); // Expected: 'it'
console.log(getSecondAndThirdChar('cat')); // Expected: 'at'

// 'cat' => 'at'
// 'robbed' => 'ob'

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter (word) {
  return word.slice(1, 5);
}
console.log(getSecondThroughFifthLetter('kitkat')); //Expected: 'itka'

// 4. given a string and a number called N, return the second through the Nth character
function getSecondThroughNth(str, n) {
    return str.slice(1, n);
}
console.log(getSecondThroughNth('schoolbus', 5)); // Expected: 'choo'
console.log(getSecondThroughNth('telephone', 6)); // Expected: 'eleph'

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements
function getFalseElements(arr) {
    return arr.filter(el => el === false);
}
console.log(getFalseElements([true, true, false, true, false])); // Expected: [false, false]
console.log(getFalseElements([false, true, false, false])); // Expected: [false, false, false]

// [true, true, false, true , false] => [false, false]

// 6. given a string with two words, put ' the ' between the words and return the string
function insertThe(str) {
    let words = str.split(' ');
    return words[0] + ' the ' + words[1];
}
console.log(insertThe('to beach')); // Expected: 'to the beach'
console.log(insertThe('for real')); // Expected: 'for the real'

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

// 7.  given two numbers, price and discount, return the price after the discount is applied
function applyDiscount(price, discount) {
    return price - (price * discount / 100);
}
console.log(applyDiscount(100, 15));// Expected: 85

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
