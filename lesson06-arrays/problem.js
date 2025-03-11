// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The largest element if it meets the condition, otherwise -1.
 */

function checkLargestElement(nums) {
    if(nums.length === 1) return 0;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let largestIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            largestIndex = i;
        } else if(nums[i] > secondLargest) secondLargest = nums[i];
    }

    return largest >= 2 * secondLargest ? largest : -1;
}

console.log(checkLargestElement([1, 3, 9, 2]));

// [1, 5, 3, 9, 2] => -1
// [-7, -2, -5, -1] => 3
// [-7, 5, -5, 1] => 1

//one el
// all equal
// duplicates

module.exports = checkLargestElement;
