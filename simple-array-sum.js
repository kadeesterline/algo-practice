// Simple Array Sum
//########
//  https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
//  Given an array of integers, find the sum of its elements.
//########
// Example
// -------
// Input: [1,2,3,4,10,11]
// Output: 31;
//########

function simpleArraySum(ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    total = ar[i] + total;
    console.log("Total in loop", total);
  }
  console.log("total at return", total);
  return total;
}
