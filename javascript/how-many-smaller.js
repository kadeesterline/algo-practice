// How many are smaller than me?
//########
//  Codewars
//  https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
//  Write a function that given an array 'arr' returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
//########
// Example
// -------
// Input: [5, 4, 3, 2, 1]
// Output: [4, 3, 2, 1, 0]
//########
// O(n^2)

function smaller(nums) {
  let resultArray = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        resultArray[i]++;
      } else {
        resultArray[i] === 0;
      }
    }
  }
  return resultArray;
}
