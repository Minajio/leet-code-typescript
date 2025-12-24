/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  let median1 = 0;
  let median2 = 0;

  if(nums1.length === 1){
    median1 = nums1[0];
  }
  else if(nums1.length % 2 === 0){
    const middle = nums1.length / 2;
    median1 = (nums1[Math.floor(middle)] + nums1[Math.ceil(middle)]) / 2;
  }
  else{
    median1 = nums1[nums1.length / 2];
  }
  
  if(nums2.length === 1){
    median2 = nums2[0];
  }
  else if(nums2.length % 2 === 0){
    const middle = nums2.length / 2;
    median2 = (nums2[Math.floor(middle)] + nums2[Math.ceil(middle)]) / 2;
  }
  else{
    median2 = nums2[nums2.length / 2];
  }

  return (median1 + median2) / 2;

};
// @lc code=end

