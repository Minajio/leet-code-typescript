/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

  let highestNumber = 0;

  for(const candy of candies){
    if(highestNumber < candy) highestNumber = candy;
  }

  const answer: boolean[] = [];

  for(const candy of candies){
    if(candy + extraCandies >= highestNumber){
      answer.push(true);
      continue;
    }
    answer.push(false);
  }

  return answer;

};
// @lc code=end

