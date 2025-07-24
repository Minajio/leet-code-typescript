/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let modifyPosition = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      nums[modifyPosition] = nums[i];
      modifyPosition++;
    }
  }

  for(let i = modifyPosition; i < nums.length; i++){
    nums[i] = 0;
  }
};
// @lc code=end

