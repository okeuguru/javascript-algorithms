// Write a program that takes in an alphanumeric string and
// returns a count of occurences of each charater in the string

function charCounter(str) {
  let obj = {};
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char]++ || 1;
    }
  }
  return obj;
}

console.log(charCounter("hello"));
