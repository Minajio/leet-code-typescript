/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {

  if(x < 0) return false;

  if(x > -1 && x < 10) return true;

  let temp = x;

  let copy = 0;

  while(temp > 9){

    copy = (copy * 10) + (temp % 10);

    temp = Math.floor(temp / 10);

  }

  copy = (copy * 10) + temp;

  if(copy === x) return true;

  return false;

};
// @lc code=end

