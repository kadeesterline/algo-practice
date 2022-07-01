// First Missing Positive
//########
//  LeetCode problem number 41.
//  https://leetcode.com/problems/first-missing-positive/
//  Given an unsorted integer array 'nums', return the smallest missing positive integer
//########
// Example
// -------
// Input: nums = [7, 8, 9, 11, 12];
// Output: 1;
//########
//  O(N)

var firstMissingPositive = function (nums) {
  nums = Array.from(new Set(nums));
  let sorted = nums.sort((a, b) => a - b).filter((num) => num > 0);
  if (sorted.length < 1) {
    return 1;
  }
  if (sorted[0] > 1) {
    return 1;
  } else {
    for (let i = 0; i <= sorted[sorted.length - 1]; i++) {
      if (sorted[i] + 1 < sorted[i + 1]) {
        return sorted[i] + 1;
      } else if (sorted[i] === sorted[sorted.length - 1]) {
        return sorted[i] + 1;
      }
    }
  }
};
