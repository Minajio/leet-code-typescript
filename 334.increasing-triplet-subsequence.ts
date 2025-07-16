/*
 * @lc app=leetcode id=334 lang=typescript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
function increasingTriplet(nums: number[]): boolean {

  let tripletCount = [Infinity, Infinity]

  for(let i = 0; i < nums.length; i++){

    if(nums[i] <= tripletCount[0]){
      tripletCount[0] = nums[i];
    }
    else if(nums[i] <= tripletCount[1]){
      tripletCount[1] = nums[i];
    }
    else{
      return true;
    }

  }

  return false;

};
// @lc code=end

