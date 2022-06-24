// Seven ate 9
//########
//  Codewars
//  https://www.codewars.com/kata/559f44187fa851efad000087
//  Write a function that removes all 9's preceded and followed by 7's
//########
// Example
// -------
// Input: ("797123912")
// Output: "77123912"
//########
// O(n)

function sevenAte9(str) {
  let temp = [];
  let i = 0;
  while (i < str.length) {
    if (str[i] !== "9") {
      temp = [...temp, str[i]];
      i++;
    } else {
      if (str[i - 1] === "7" && str[i + 1] === "7") {
        i++;
      } else {
        temp = [...temp, str[i]];
        i++;
      }
    }
  }
  let newStr = temp.join("");
  return newStr;
}
