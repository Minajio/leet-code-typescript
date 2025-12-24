/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  if((nums1.length + nums2.length) % 2 === 0){
    const medianPos = Math.floor((nums1.length + nums2.length) / 2);
    
    let currentPos = 0;
  
    let nums1Pos = 0;
    let nums2Pos = 0;
  
    while(medianPos !== currentPos){
      if(nums1[nums1Pos] < nums2[nums2Pos]){
        currentPos++;
        nums1Pos++;
        continue;
      }
      currentPos++;
      nums2Pos++;
    }
  
    let n1 = 0;
  
    if(nums1[nums1Pos] < nums2[nums2Pos]){
      n1 = nums1[nums1Pos];
      nums1Pos++;
    }
    else{
      n1 = nums2[nums2Pos];
      nums2Pos++;
    }
  
    let n2 = Math.min(nums1[nums1Pos], nums2[nums2Pos]);
  
    return (n1 + n2) / 2;
  }

  const medianPos = (nums1.length + nums2.length) / 2;

  let currentPos = 0;
  
  let nums1Pos = 0;
  let nums2Pos = 0;

  while(medianPos !== currentPos){
    if(nums1[nums1Pos] < nums2[nums2Pos]){
      currentPos++;
      nums1Pos++;
      continue;
    }
    currentPos++;
    nums2Pos++;
  }
  
  return Math.min(nums1[nums1Pos], nums2[nums2Pos]);
  

};
// @lc code=end

