const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(
  input[0].split('').reduce((acc, cur) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(cur)) return acc + 1;
    return acc;
  }, 0)
);
