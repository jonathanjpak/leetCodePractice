/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // We can start looping through the nums array
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        const targetPair = target - nums[i];
        if (hashmap.hasOwnProperty(targetPair)) {
            return [hashmap[targetPair], i];
        }
        hashmap[nums[i]] = i;
    }
};

export {twoSum};