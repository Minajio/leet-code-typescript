/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {

  for(let i = 0; i < t.length; i++){
    if(s === '') return true;

    if(t[i] === s[0]) s = s.substring(1);

  }
  if(s === '') return true;

  return false;
};
// @lc code=end

