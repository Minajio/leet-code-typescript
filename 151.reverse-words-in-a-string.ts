/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {

  const initialWords = s.trim().split(' ').filter(value => value !== '');

  const words: string[] = [];

  for(const word of initialWords){
    words.push(word.trim());
  }

  return words.reverse().join(' ');

};
// @lc code=end

