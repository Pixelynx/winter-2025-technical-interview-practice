// 1. Given an array create a function that returns the element at the center of the array;
// input: [1,2,3,4] output: 2;
// input: [1,2,3,4,5] output: 3

const middleNum = (arr) => {
    let left = 0;
    let right = arr.length -1;
    let mid = Math.floor(left + (right - left) / 2);
    return arr[mid];
    
}

// console.log(middleNum([1,2,3,4,5]))

// 2. Given an array of integers return true if the array is sorted otherwise return false;
// input: [1,5,8,9,11] output: true
// input: [1,2,3,0] output: false

// const isSorted = (arr) => {

// }

// 3. Given an array and a value return the index where that value can be found. Otherwise, return -1.
// input [1,2,3,4,5], 3 output: 2
// input ["yellow", "blue", "green"], "purple" output: -1

const targetFound = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            left = mid + 1;
        } else right = mid - 1;
    }
    return -1;
}
console.log(targetFound([1,2,3,4,5]))