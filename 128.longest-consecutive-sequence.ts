/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if(nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for(let i = 0; i < nums.length; i++){
    if(i === 0) continue;

    if(nums[i-1] + 1 === nums[i]){
      currentConsecutive++;
      if(currentConsecutive > maxConsecutive) maxConsecutive = currentConsecutive;
    }
    else if(nums[i-1] === nums[i]) continue;
    else currentConsecutive = 1;
  }

  return maxConsecutive;

};
// @lc code=end

