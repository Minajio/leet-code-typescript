/*
 * @lc app=leetcode id=1071 lang=typescript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {

  if(!str1.startsWith(str2.charAt(0))) return '';

  if(str2.length > str1.length){
    const temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let answer = '';
  let partialAnswer = '';
  let coincidencePosition = 0;
  
  function searchCoincidence(character: string): boolean{
    if(answer.charAt(coincidencePosition) === character){
      coincidencePosition++;
      return true;
    }
    coincidencePosition = 0;
    return false;
  }

  function verifyAnswer(valueToCompare: string, valueToCompare2: string): boolean{
    let j = 0;
    for(let i = 0; i < valueToCompare2.length; i++){
      if(valueToCompare.length === j) j = 0;
      if(valueToCompare.charAt(j) !== valueToCompare2.charAt(i)){
        return false;
      }
      j++;
    }
    if(j !== valueToCompare.length) return false;
    return true;
  }

  for(let i = 0; i < str2.length; i++){
    if(partialAnswer !== ''){
      if(verifyAnswer(answer + partialAnswer, str1) && verifyAnswer(answer + partialAnswer, str2)){
        answer += partialAnswer;
        partialAnswer = '';
        coincidencePosition = 0;
      }
    }
    
    if(searchCoincidence(str2.charAt(i))){
      partialAnswer += str2.charAt(i);
      continue;
    }
    
    if(partialAnswer !== ''){
      partialAnswer += str2.charAt(i);
      continue;
    }
    
    answer += str2.charAt(i);
  }

  if(partialAnswer !== ''){
    if(verifyAnswer(answer + partialAnswer, str1) && verifyAnswer(answer + partialAnswer, str2)){
      answer += partialAnswer;
    }
  }

  return (verifyAnswer(answer, str1) && verifyAnswer(answer, str2)) ? answer : '';
};
// @lc code=end

