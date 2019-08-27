// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  if (str1.length < 1 || str2.length < 1) {
    return null;
  }

  if (str2.includes(str1)) {
    console.log(`${str1} is contained in ${str2}`);
  } else {
    console.log(`${str1} is NOT contained in ${str2}`);
  }
}

isSubsequence("hello", "hello world");
isSubsequence("sing", "sting");
isSubsequence("abc", "abracadabra");
isSubsequence("abc", "acb");
