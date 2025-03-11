// With sorted array

function twoSum(nums, target) {
    // create left pointer for start
    let left = 0;
    // create right pointer for end
    let right = nums.length - 1;
    // while left < right
    while (left <= right) {
        // create var to keep track of sum of left and right
        let sum = nums[left] + nums[right];
        // check if the sum of the values at pointers match target
        if (sum === target) {
            // return [left, right]
            return [left, right];
        }

        // if sum > right
            // decrement the right pointer
        if (sum > right) right--;
        // if sum < target
            // increment the left pointer
        if (sum < target) left++;
    }
    return [];
};

