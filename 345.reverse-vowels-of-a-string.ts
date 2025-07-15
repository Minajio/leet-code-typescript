/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {

  function replaceAt(index: number, replacement: string, originalString: string) {
    return originalString.substring(0, index) + replacement + originalString.substring(index + replacement.length);
  }

  const allVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const positions: number[] = [];

  const vowelArray: string[] = [];

  for(let i = 0; i < s.length; i++){
    if(allVowels.includes(s.charAt(i))){
      positions.push(i);
      vowelArray.push(s.charAt(i));
    }
  }

  vowelArray.reverse();

  let newString = s;

  for(let i = 0; i < positions.length; i++){
    newString = replaceAt(positions[i], vowelArray[i], newString);
  }

  return newString;

};
// @lc code=end

