/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */

// O(n)^2: CURRENTLY FAILING LAST TEST CASE
// const twoSum = (nums, target) => {
//   for(let i = 0; i < nums.length; i++) {
//     // Loop through the rest of the array to find a pair
//     for(let j = i + 1; j < nums.length; j++) {
//       // Check if the two numbers add up to the target
//       if(nums[i] + nums[j] === target) {
//         // Return their indices as an array
//         return [i, j];
//       }
//     }
//   }
// };

// HASH MAP SOLUTION
const twoSum = (nums, target) => {
  let complementMap = new Map();
  // Find complement between number at index and target
  // If current number at the index is in the map; return indicies, means we've seen complement
  // If not found, add it's complement to map
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(complementMap.has(nums[i])) {
      return [complementMap.get(nums[i]), i];
    }
    complementMap.set(complement, i);
  }
  // If no complements, return empty array
  return [];
};

// const nums = [2, 7, 11, 15]; // => Target:9 | Output: [0, 1]
const nums = [1, 5, 3, 7]; // Target:8 | Output: [1, 2]
// const target = 9;
const target = 8;
const result = twoSum(nums, target);
console.log(result);


module.exports = twoSum;
