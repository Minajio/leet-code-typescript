/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {

  const answer: number[] = [];

  for(let i = 0; i < nums.length; i++){
    const tempNums = [...nums];
    tempNums.splice(i, 1);

    answer.push(tempNums.reduce((accumulator, currentValue) => accumulator * currentValue, 1));
  }

  return answer;

};
// @lc code=end

