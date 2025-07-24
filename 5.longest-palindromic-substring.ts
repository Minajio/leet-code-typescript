/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if(s === s.split('').reverse().join('')) return s;

  let longestPalindrome = '';
  let palindromeFound = '';

  for(let i = 0; i < s.length; i++){
    palindromeFound = s[i];
    let count = 1;
    if(palindromeFound.length > longestPalindrome.length) longestPalindrome = palindromeFound;
    do{
      let tempString = palindromeFound
      if(i - count > -1){
        tempString = s[i - count] + palindromeFound;
        if(tempString === tempString.split('').reverse().join('')){
          if(tempString.length > longestPalindrome.length) longestPalindrome = tempString;
        }
      }
      if(i + count < s.length){
        tempString+=s[i + count];
        if(tempString === tempString.split('').reverse().join('')){
          if(tempString.length > longestPalindrome.length) longestPalindrome = tempString;
        }
      }
      palindromeFound = tempString;
      if(palindromeFound === palindromeFound.split('').reverse().join('')){
        if(palindromeFound.length > longestPalindrome.length) longestPalindrome = palindromeFound;
      }
      count++;
    }while(i - count > -1 || i + count < s.length)
  }

  if(longestPalindrome.length === 0) longestPalindrome = s[0];

  return longestPalindrome;
};
// @lc code=end

