// Given two strings, write a function to determine if the
// second string is an anagram of the first/
// An anagram is a word, or phrase, or name formed by rearranging
// the letters of another, such as cinema, formed from iceman

// Frequuency Counter solution

function validAnagram(str1, str2) {
  let strCounter1 = {};
  let strCounter2 = {};

  for (let char of str1) {
    strCounter1[char] = ++strCounter1[char] || 1;
  }

  for (let char of str2) {
    strCounter2[char] = ++strCounter2[char] || 1;
  }

  console.log(`strCounter1: ${JSON.stringify(strCounter1)}`);
  console.log(`strCounter2: ${JSON.stringify(strCounter2)}`);

  for (let key in strCounter1) {
    if (!(key in strCounter2)) console.log(`is not Anagram: ${false}`);
    if (strCounter2[key] !== strCounter1[key])
      console.log(`is not Anagram: ${false}`);
  }
  console.log(`is Anagram: ${true}`);
  return true;
}

// This is a second method for solving this
// using a frequency counter

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    lookup[letter] = ++lookup[letter] || 1;
  }

  for (let letter of second) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return `is Anagram: ${true}`;
}

validAnagram("cinema", "iceman");

validAnagram2("cinema", "iceman");
