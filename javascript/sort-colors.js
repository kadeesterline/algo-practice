// Sort Colors
//########
//  LeetCode problem number 75.
//  https://leetcode.com/problems/sort-colors/
//  Given an array nums with n objects colored red, white, or blue, sort them in-place so that
//  objects of the same color are adjacent, with the colors in the order red, white, and blue.
//  We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//  You must solve this problem without using the library's sort function.
//########
// Example
// -------
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
//########
//  O(N)

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let current = nums[left];

    // unshift 0's to the front of the array
    if (current === 0) {
      let temp = nums.splice(left, 1)[0];
      nums.unshift(temp);
      left++;
    }
    // push 2's to the end of the array
    else if (current === 2) {
      let temp = nums.splice(left, 1)[0];
      nums.push(temp);
      right--;
    }
    // ignore 1's
    else {
      left++;
    }
  }
  return nums;
};
