// Reverse Integer
//########
//  LeetCode problem number 7.
//  https://leetcode.com/problems/reverse-integer/
//  Given a signed 32-bit integer 'x', return x with its digits reversed.
//  If reversing x causes the value to go outside the 32-bit signed integer range
//  (-2^31, 2^31-1) then return 0
//########
// Example
// -------
// Input: x = -123
// Output: -321
//########
//O(n)`

var reverse = function (x) {
  if (x < 0) {
    let num = x * -1;

    let str = num.toString();

    let array = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== 0) {
        array.unshift(str[i]);
      }
    }

    if (x < 0) {
      array.unshift("-");
    }

    let newStr = array.join("");

    let result = parseInt(newStr);

    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
      return 0;
    } else {
      return result;
    }
  } else {
    let str = x.toString();

    let array = [];

    for (let i = 0; i <= str.length; i++) {
      if (str[i] !== 0) {
        array.unshift(str[i]);
      }
    }

    let newStr = array.join("");

    let result = parseInt(newStr);

    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
      return 0;
    } else {
      return result;
    }
  }
};
