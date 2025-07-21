/*
 * @lc app=leetcode id=443 lang=typescript
 *
 * [443] String Compression
 */

// @lc code=start
function compress(chars: string[]): number {

  let finalLength = 0;
  let current = chars[0]
  let count = 0;
  let writingPosition = 0;
  let lastInsertion = false;

  for(let i = 0; i < chars.length; i++){
    
    if(chars[i] !== current || i === chars.length - 1){
      if(i === chars.length - 1 && chars[i] === current) count++;
      else if(i === chars.length - 1 && chars[i] !== current){
        // count++;
        lastInsertion = true;
      }
      chars[writingPosition] = current;
      writingPosition++;
      finalLength++;
      if(count !== 1){
        if(count > 9){
          const temp = ''+count;
          for(let j = 0; j < temp.length; j++){
            chars[writingPosition] = temp[j];
            writingPosition++;
            finalLength++;
          }
        }
        else{
          chars[writingPosition] = ""+count;
          writingPosition++;
          finalLength++;
        }
      }
      count = 0;
      current = chars[i];
    }
    count++;
  }

  if(lastInsertion){
    chars[writingPosition] = current;
      writingPosition++;
      finalLength++;
      if(count !== 1){
        if(count > 9){
          const temp = ''+count;
          for(let j = 0; j < temp.length; j++){
            chars[writingPosition] = temp[j];
            writingPosition++;
            finalLength++;
          }
        }
        else{
          chars[writingPosition] = ""+count;
          writingPosition++;
          finalLength++;
        }
      }
  }

  return finalLength;

};
// @lc code=end

