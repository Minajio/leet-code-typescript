/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  let newString = '';

  for(let i = 0; i < (word1.length >= word2.length ? word1.length : word2.length ); i++){
    newString += word1.charAt(i);
    newString += word2.charAt(i);
  }

  return newString;
};
// @lc code=end

