// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns 
// the sum of all the numbers in the array.

const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sumArray[3, 7, 11, 21]);
// [3, 7, 11, 21] =>

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns 
// the maximum number in the array.

const findMax = (arr) => {
    let max = arr[0];

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// console.log(findMax([11, 2, 8, 17, 2]));
// [11, 2, 8, 17, 2] => 17

// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a 
// new array with the elements in reverse order.

const reverseArray = (arr) => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
