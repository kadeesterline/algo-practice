// Exclusive 'or' (xor)Logical Operator
//########
//  Codewars
//  https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
//  Write a function that returns true if exactly one of the two expressions are true
//########
// Example
// -------
// Input: (false, true)
// Output: true
// Input: (true, true)
// Output: false
//########
// O(n)

function xor(a, b) {
  //if a !b -> true
  if (a && !b) {
    return true;
  }
  //if !a b -> true
  if (b && !a) {
    return true;
  }
  return false;
}
