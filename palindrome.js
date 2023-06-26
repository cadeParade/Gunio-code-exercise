// "What is the sum of all numeric palindromes that are less than 10,000?"

const range = 10000;

function isPalindrome(num) {
  const numStr = num.toString();
  const reversed = numStr.split('').reverse().join('');
  return numStr === reversed;
}

function findPalindromes(range) {
  let palindromes = [];
  for (let i = 0; i < range; i++) {
    if (isPalindrome(i)) palindromes.push(i)
  }
  return palindromes;
}

function sumPalindromes(range) {
  const palindromes = findPalindromes(range);
  return palindromes.reduce((acc, curr) => acc + curr, 0);
}

console.log(`sum of palindromes from 0 - ${range} is: ${sumPalindromes(range)}`)
