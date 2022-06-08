// Two Sum
//########
//  LeetCode problem number 1.
//  https://leetcode.com/problems/two-sum/
//  Given an array of integers 'nums' and an integer 'target' return indices of the two numbers
//  such that they add up to target. Assume exactly one solution.
//########
// Example
// -------
// Input: (nums = [3, 2, 4]), (target = 6);
// Output: [1, 2];
//########
//  O(n^2) time complexity

var twoSum = function (nums, target) {
  let solution = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          solution = [...solution, i, j];
          return solution;
        }
      }
    }
  }
};
