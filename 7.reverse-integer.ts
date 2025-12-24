/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  
  const minInt = (-2) ** 31;
  const maxInt = 2 ** 31 - 1;

  class Int32Overflow extends Error {
    constructor(message?: string) {
      super(message ?? 'Int32 overflow');
      this.name = 'Int32Overflow';
    }
  }

  function checkedAdd(a: number, b: number): number {
    const res = a + b;
    if (res < minInt || res > maxInt) throw new Int32Overflow();
    return Math.trunc(res);
  }

  function checkedMulAdd(a: number, mul: number, add: number): number {
    if (mul !== 0) {
      const maxDiv = Math.trunc(maxInt / mul);
      const minDiv = Math.trunc(minInt / mul);
      if (a > maxDiv || a < minDiv) throw new Int32Overflow();
    }

    const prod = a * mul;
    const res = prod + add;
    if (res < minInt || res > maxInt) throw new Int32Overflow();
    return Math.trunc(res);
  }

  let reversed = x.toString().split('').reverse();

  console.log(reversed)

  let result = 0;

  let isNegative = false;

  if(reversed[reversed.length - 1] === '-'){
    isNegative = true;
    reversed.pop();
  }

  console.log(reversed)

  try{

    result = checkedAdd(result, Number.parseInt(reversed[0]));

    for(let i = 1; i < reversed.length; i++){
      result = checkedMulAdd(result, 10, Number.parseInt(reversed[i]));
    }

    if(isNegative){
      result*=-1;
    }

  }catch(e: unknown){
    result = 0;
  }

  return result;

};
// @lc code=end

