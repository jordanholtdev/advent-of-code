const readFile = require('fs').readFileSync;

// prep the input
const file = readFile(__dirname + '/../1-a.input', 'utf-8')
  .split(/\r?\n/)
  .filter((_) => _.trim())
  .map((_) => {
    return parseInt(_, 10);
  });

const res = [];
let found = false;

for (let i = 0; i < file.length; i++) {
  const a = file[i];

  if (a > 2018) continue;

  const subset1 = file.slice(1);
  for (let j = 0; j < subset1.length; j++) {
    const b = subset1[j];

    if (a + b > 2020) continue;

    const subset2 = subset1.slice(1);
    for (let k = 0; k < subset2.length; k++) {
      const c = subset2[k];

      if (a + b + c === 2020) {
        found = true;
        res.push(a, b, c);
        break;
      }
    }
    if (found) break;
  }
  if (found) break;
}

const finalResult = res.reduce((acc, curr) => {
  return (acc *= curr);
});

console.log(finalResult);
