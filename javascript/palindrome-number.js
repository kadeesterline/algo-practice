// Palindrome Number
//########
//  LeetCode problem number 9.
//  https://leetcode.com/problems/palindrome-number/
//  Given an integer 'x', return true if x is a palindrome integer.
//  an integer is a palindrome if it reads the same forwards and backwards
//########
// Example
// -------
// Input: x = 10
// Output: false
//########
// O(n)

var isPalindrome = function (x) {
  let string = x.toString();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] === string[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
};
