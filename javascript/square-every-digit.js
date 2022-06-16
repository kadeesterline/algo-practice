// Square every digit
//########
//  Codewars
//  https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//  Square every digit of a number and concatenate them.
//########
// Example
// -------
// Input: num = 9119
// Output: 811181
//########
// O(n)

function squareDigits(num) {
  let str = num.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr = [...arr, str[i]];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  let newStr = arr.join("");
  let squared = parseInt(newStr);
  return squared;
}
