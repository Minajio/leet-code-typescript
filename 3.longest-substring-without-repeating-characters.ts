/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let answer = 0;
  let longestSubstring = '';

  for(let i = 0; i < s.length; i++){
    if(longestSubstring.includes(s[i])){
      longestSubstring = longestSubstring.substring(longestSubstring.indexOf(s[i]) + 1);
    }
    longestSubstring += s[i];
    if(longestSubstring.length > answer) answer = longestSubstring.length;
  }

  return answer;
};
// @lc code=end

