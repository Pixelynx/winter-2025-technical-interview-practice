function twoSum(nums, target) {
    if (nums.length < 2) return [];

    let complementMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (complement in complementMap) {
            return [complementMap[complement], i];
        }
        complementMap[nums[i]] = i;
    }

    return [];
};





// if nums < 2 return []
if (nums.length < 2) return [];
// create a map to keep track of numbers that meet target
const complementMap = new Map();
// for every number in nums
for (let num in nums) {
    // create variable for complement; nums[num] - target
    let complement = nums[num] - target;
    // if if we haven't seen complement in map, add it with the val as the key and the index as the value
    if (complementMap.has(complement)) {
        console.log("MAP: ", complementMap.get(num))
        return complementMap.get(nums[num]);
    }
    complementMap.set(nums[num], num);
    complementMap.entries();
        
}
return [];
// return the values to the map which will be the indicies