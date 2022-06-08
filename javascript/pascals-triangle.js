// Pascal's Triangle
//########
//  LeetCode problem number 118.
//  https://leetcode.com/problems/pascals-triangle/
//  Given an integer 'numRows', return the first numRows of Pascal's Triangle.
//  In Pascal's Triangle, each number is the sum of the two numbers directly above it.
//########
// Example
// -------
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//########
// O(n^2)

var generate = function (numRows) {
  let tempArray = [];
  let resultArray = [];
  //create a tempArray numRows long
  //get number of rows to find
  for (let i = 0; i < numRows; i++) {
    tempArray = [...tempArray, i];
  }
  //for each value in tempArray, calculate a row, add row to resultArray
  //get values for each row
  for (const num of tempArray) {
    resultArray[num] = [];
    resultArray[num][0] = resultArray[num][num] = 1;
    for (let i = 1; i < num; i++) {
      resultArray[num][i] =
        resultArray[num - 1][i] + resultArray[num - 1][i - 1];
    }
  }
  //return result Array
  console.log(resultArray);
  return resultArray;
};

generate(5);
