const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const score = { D: 0, P: 0 };

for (let i = 1; i < n + 1; i++) {
  score[input[i]] += 1;
  if (Math.abs(score['D'] - score['P']) >= 2) {
    break;
  }
}
console.log(`${score['D']}:${score['P']}`);
