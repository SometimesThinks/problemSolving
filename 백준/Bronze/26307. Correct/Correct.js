const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [h, m] = input[0].split(' ').map(Number);

console.log((h - 9) * 60 + m);
