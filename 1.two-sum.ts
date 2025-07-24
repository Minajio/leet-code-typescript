/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {

  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(i === j) continue;
      if(nums[i] + nums[j] === target) return [j, i];
    }    
  }
  return [0, 0];
};
// @lc code=end

