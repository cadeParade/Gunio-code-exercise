const num =  2660

const numLookup = {
  M:  1000,
  CM: 900,
  D:  500,
  CD: 400,
  C:  100,
  XC: 90,
  L:  50,
  XL: 40,
  X:  10,
  IX: 9,
  V:  5,
  IV: 4,
  I:  1,
}

function convertToRoman(num) {
  let roman = '';
  for (let key in numLookup) {
    while (num >= numLookup[key]) {
      roman += key;
      num -= numLookup[key];
    }
  }
  return roman;
}

function createRomanSequence(num) {
  let sequence = [];
  for (let i = 1; i <= num; i++) {
    sequence.push(convertToRoman(i));
  }
  return sequence;
}

function countX(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'X') {
      count++;
    }
  }
  return count;
}

function sumRomanXs(range) {
  const sequence = createRomanSequence(range)
  return sequence.reduce((acc, curr) => acc + countX(curr), 0)
}

console.log(
  `In the range 1-${num}, expressed in Roman numerals, the character "X" appears ${sumRomanXs(num)} times`,
);
