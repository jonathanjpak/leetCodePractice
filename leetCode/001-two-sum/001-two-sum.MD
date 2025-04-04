# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

## Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

## Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

## Solution

### Plan

* The problem gives a numbers array and a target for values to add up to.
* The problem also stipulates there is exactly one answer, and that the same element cannot be used twice. Answers can be returned in any order.
* The inputs are a numbers array, a target and the expected return type is an array with two values representing the two indices of the numbers that add up.

Since we can assume that each problem has exactly one solution, we don't need to worry about collisions or multiple answers so that helps eliminate any defensive programming like extra assertions to accommodate for edge cases. The follow-up challenges the coder to come up with a solution that operates in less than O(n^2) so if we can use at most one loop, that would reduce time complexity.

A brute force idea would be to run two loops where we loop through the nums array and then run a subsequent loop for each value to test for a target match. However, we know this is pretty inefficient because search in an array is O(n) and doing another search is O(n) resulting in O(n^2).

Search in a hash map is O(1) or constant time. We can treat an object like a hash map to help reduce search time. We know the target value in relation to each number checked so if we loop through the nums array and store each value in the hash map object we can run a O(1) search for each value in the array. For the key-value pairing, we can store the related index. Potential issues may arise in hash maps when there are collisions so we'll have to potentially throw out later collisions if a key already exists in the hash map. However, since we can assume that there is exactly one solution, we can almost be certain that collisions will not be too much of an issue, however, we should still keep that in mind when coding.

### Pseudocode

1. For-loop through the nums array and keep track of the current number index
2. Find the matching pair value using target - number
3. If hashmap contains the matching pair value, return its index and current index in an array
4. Otherwise, store the number and its corresponding index into the hashmap

We should not use Array.forEach() because it does NOT let us break out of the loop with a return statement so that is why we opt to use a basic for-loop. Object.prototype.hasOwnProperty() is an excellent instance method to use to check the hashmap with O(1) time complexity.