const rangeLimit = 10000;
const fibSeeds = [0, 1];

function generateNextNumber(num1, num2) {
  return num1 + num2;
}

function generateFibSequence(sequence, range) {
  if (range < 2) {
    return fibSeeds;
  }
  for (let i = 0; i < range; i++) {
    const nextNum = generateNextNumber(fibSeeds[0], fibSeeds[1]);
    if (nextNum >= range) return;  
    fibSeeds[0] = fibSeeds[1];
    fibSeeds[1] = nextNum;
    sequence.push(nextNum);
  }
}

function isNumOdd(num) {
  return num % 2 !== 0;
}

function sumOfOddFibNums(range) {
  let sequence = [...fibSeeds];
  generateFibSequence(sequence, range)
  const oddNums = sequence.filter(isNumOdd);
  const sum = oddNums.reduce((acc, curr) => acc + curr, 0)
  return sum
}

console.log(
  `Sum of odd fibonacci numbers less than ${rangeLimit} is: ${sumOfOddFibNums(rangeLimit)}`,
)


