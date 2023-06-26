const quote = 'Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.';

function isCharVowel(char) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(char);
}

function isAlphabeticCharacter(char) {
  return /[a-zA-Z]/.test(char);
}


function calcStringSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!isAlphabeticCharacter(char)) continue;

    let charCode = str.charCodeAt(i);
    sum += isCharVowel(char) ? charCode * -1 : charCode;
  }
  return sum;
}

require('assert').equal(calcStringSum('why and how'), 569);
console.log('Quote string sum is ', calcStringSum(quote));

