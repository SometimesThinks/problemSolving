const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < Number(input[0]); i++) {
  process.stdout.write('LoveisKoreaUniversity ');
}
