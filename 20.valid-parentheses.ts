/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {

  let stack: string[] = [];

  for(let i = 0; i < s.length; i++){
    if(/\(|\[|\{/.test(s[i])){
      stack.push(s[i]);
      continue;
    }
    if(stack.length < 1) return false;
    if(stack[stack.length - 1].charCodeAt(0) == s[i].charCodeAt(0) - 2 || stack[stack.length - 1].charCodeAt(0) == s[i].charCodeAt(0) - 1){
      stack.pop();
      continue;
    }
    return false;
  }

  if(stack.length === 0) return true;

  return false;
};
// @lc code=end

