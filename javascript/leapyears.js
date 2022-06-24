// Leap Years
//########
//  Codewars
//  https://www.codewars.com/kata/526c7363236867513f0005ca
//  Write a function that determines if a year is a leap year
//########
// Example
// -------
// Input: (2016)
// Output: true
//########
// O(n)

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 4 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
