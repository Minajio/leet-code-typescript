/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {

  let accumulation = 1;

  let answer: number[] = []

  for(let i = 0; i < nums.length; i++){

    if(i === 0){
      answer.push(nums[i]);
      continue;
    }

    accumulation *= nums[i - 1];
    answer.push(accumulation);
    
    // accumulation *= nums[i];
    // answer.push(accumulation);

    
    // preAnswer.push(accumulation);
    // accumulation *= i === 0 ? nums[i + 1] : nums[i];
  }

  accumulation = 1;


  for(let i = nums.length - 1; i > -1; i--){
    
    if(i !== nums.length - 1){     
      accumulation *= nums[i + 1];
      if(i === 0){
        answer[i] = accumulation;
        break;
      }
      answer[i] *= accumulation;
    }
  

    // accumulation *= nums[i];
    // answer[i] *= accumulation;


    // answer.push(accumulation);
    // accumulation *= i === preAnswer.length - 1 ? preAnswer[i - 1] : preAnswer[i];
  }

  return answer;

};
// @lc code=end

