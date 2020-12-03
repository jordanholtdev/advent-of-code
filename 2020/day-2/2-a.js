const readFile = require('fs').readFileSync;

// read the file contents
const res = readFile(__dirname + '/2-a.input', 'utf-8')
  // split from newline and trim
  .split(/\r?\n/)
  .filter((_) => _.trim())
  .filter((line) => {
    const [rule, password] = line.split(': ');

    let [, min, max, letter] = rule.match(/(\d+)-(\d+) (\w)/);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    const count = password.split('').filter((l) => l === letter).length;

    return count >= min && count <= max;
  });

console.log(res.length);
