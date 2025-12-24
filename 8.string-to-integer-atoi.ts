/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {

  const minInt = (-2) ** 31;
  const maxInt = 2 ** 31 - 1;

  class Int32OverflowAbove extends Error {
    constructor(message?: string) {
      super(message ?? 'Int32 overflow');
      this.name = 'Int32Overflow';
    }
  }

  class Int32OverflowBelow extends Error {
    constructor(message?: string) {
      super(message ?? 'Int32 overflow');
      this.name = 'Int32Overflow';
    }
  }

  function checkedMulAdd(a: number, mul: number, add: number, isNegative: boolean): number {
    if (mul !== 0) {
      const maxDiv = Math.trunc(maxInt / mul);
      const minDiv = Math.trunc(minInt / mul);
      if (a > maxDiv || a < minDiv) throw isNegative ? new Int32OverflowBelow() : new Int32OverflowAbove();
    }

    const prod = a * mul;
    const res = prod + add;
    if (res < minInt || res > maxInt) throw isNegative ? new Int32OverflowBelow() : new Int32OverflowAbove();
    return Math.trunc(res);
  }

  const value = s.trim();

  let isNegative = false;

  let leadingSymbol = false;

  if(value.charAt(0) === '-'){

    isNegative = true;
    leadingSymbol = true;

  }
  else if(value.charAt(0) === '+') leadingSymbol = true;

  let result = 0;

  try{
    for(let i = leadingSymbol ? 1 : 0; i < value.length; i++){
      if(!/\d/.exec(value.charAt(i))) break;
  
      result = checkedMulAdd(result, 10, Number(value.charAt(i)), isNegative);
  
    }
  }catch(e: unknown){
    if(e instanceof Int32OverflowBelow) return minInt;
    else if(e instanceof Int32OverflowAbove) return maxInt;
  }

  result *= isNegative ? -1 : 1;

  return result;

};
// @lc code=end

