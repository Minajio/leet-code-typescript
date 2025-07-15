/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {

  let flowersLeft = n;

  if(flowerbed.length === 1){
    if((flowerbed[0] === 0 && n < 2) || (flowerbed[0] === 1 && n === 0)) return true;
    return false;
  }

  for(let i = 0; i < flowerbed.length; i++){

    if(flowersLeft === 0) return true;

    if(i === 0){
      if((flowerbed[i] === 0 && flowerbed[i + 1] === 0)){
        flowersLeft -= 1;
        flowerbed[i] = 1;
      }
      // flowersLeft -= (flowerbed[i] === 0 && flowerbed[i + 1] === 0) ? 1 : 0;
    }
    else if(i === flowerbed.length - 1){
      if((flowerbed[i] === 0 && flowerbed[i - 1] === 0)){
        flowersLeft -= 1;
        flowerbed[i] = 1;
      }
      // flowersLeft -= (flowerbed[i] === 0 && flowerbed[i - 1] === 0) ? 1 : 0;
    }
    else{
      if((flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)){
        flowersLeft -= 1;
        flowerbed[i] = 1;
      }
      // flowersLeft -= (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ? 1 : 0;
    }

  }

  if(flowersLeft === 0) return true;
  return false;

};
// @lc code=end

