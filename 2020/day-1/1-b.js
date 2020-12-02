const readFile = require('fs').readFileSync;

// prep the input
const file = readFile(__dirname + '/../1-a.input', 'utf-8')
  .split(/\r?\n/)
  .filter((_) => _.trim())
  .map((_) => {
    return parseInt(_, 10);
  });

// const length = file.length;

let a = null;

let b = file.find((number, index) => {
  for (let i = 0; i < file.length; i++) {
    const m = file[i];
    if (number === index) return false;
    if (number + m === 2020) {
      a = m;
      return true;
    }
  }
});

console.log(a * b);
