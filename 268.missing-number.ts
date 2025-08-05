/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let currentNum = nums[0];

  for(let i = 1; i < nums.length; i++){
    currentNum+=1;
    if(currentNum !== nums[i]) return currentNum;
  }

  if(nums.length !== nums[nums.length - 1]) return nums.length;

  return 0;
};
// @lc code=end

