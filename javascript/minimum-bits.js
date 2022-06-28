// Minimum Bit Flips to Convert Number
//########
//  LeetCode problem number 2220.
//  https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
//  Given two integers start and goal,
//  return the minimum number of bit flips to convert start to goal.
//########
// Example
// -------
// Input: start = 10, goal = 7;
// Output: 3;
//########
//  O(N)

var minBitFlips = function (start, goal) {
  let binStart = (start >>> 0).toString(2);
  let binGoal = (goal >>> 0).toString(2);
  let result = 0;

  while (binStart.length < binGoal.length) {
    binStart = "0" + binStart;
  }

  while (binGoal.length < binStart.length) {
    binGoal = "0" + binGoal;
  }

  if (binStart == binGoal) return result;
  for (let i = 0; i < binStart.length; i++) {
    if (binStart[i] !== binGoal[i]) {
      result = result + 1;
    }
  }

  return result;
};
