// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:

// Time: O(N)

// Approach
// 1. If lengths of inputs are not equal return false
// 2. Create a look up dictionary with the count of each integer
//    and the number of times each occurs.
// 3. Loop through the created dictionary and for each key in the
//    dict subract one from the dict count

function sameFrequency(int1, int2) {
  let firstInt = int1.toString();
  let secondInt = int2.toString();
  if (firstInt.length !== secondInt.length) {
    return false;
  }

  let lookup = {};

  for (let num of firstInt) {
    lookup[num] = ++lookup[num] || 1;
  }
  for (let num of secondInt) {
    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }
  console.log(`sameFrequency(${firstInt}, ${secondInt}): ${true}`);
  return true;
}

// test
sameFrequency(182, 281);
sameFrequency(32, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
