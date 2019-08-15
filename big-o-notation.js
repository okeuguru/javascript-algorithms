/// Sum all numbers from 1 to n ///

// Solution 1
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Solution 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(`Solution one ${addUpTo1(4)}`);

console.log(`Solution two ${addUpTo2(4)}`);
