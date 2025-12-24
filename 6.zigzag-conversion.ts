/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if(numRows === 1) return s;
  let result = '';

  let matrix: string[][] = [];

  for(let i = 0, currentPos = 0, goingDown = true; i < s.length; i++){
    if((currentPos === 1 && goingDown === false) || (currentPos === 2 && numRows === 2)){
      currentPos = 0;
      goingDown = true;
    }

    if((currentPos < numRows && goingDown) || numRows === 2){
      if(currentPos === 0) matrix.push(Array.from(new Array(numRows), () => ''));

      matrix[matrix.length - 1][currentPos] = s.charAt(i);

      currentPos++;

      continue;
    }

    if(goingDown) currentPos--;

    goingDown = false;

    currentPos--;

    matrix.push(Array.from(new Array(numRows), () => ''));

    matrix[matrix.length - 1][currentPos] = s.charAt(i);

  }

  for(let i = 0; i < numRows; i++){

    for(let j = 0; j < matrix.length; j++){
      result+=matrix[j][i];
    }

  }

  return result;
};
// @lc code=end

