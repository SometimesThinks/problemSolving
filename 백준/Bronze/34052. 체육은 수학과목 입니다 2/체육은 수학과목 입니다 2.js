const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = input.map(Number).reduce((acc, cur) => (acc += cur), 0);

console.log(t + 300 > 1800 ? 'No' : 'Yes');
