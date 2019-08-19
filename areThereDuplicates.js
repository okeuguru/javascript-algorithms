// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using the
// frequency counter pattern OR the multiple pointers pattern

// frequency counter pattern
function areThereDuplicates1(...args) {
  if (args.length === 0) return false;

  let lookup = {};
  let result = false;

  for (let item of args) {
    lookup[item] = ++lookup[item] || 1;
    if (lookup[item] > 1) {
      result = true;
      console.log(result);
      break;
    }
  }

  return result;
}

//areThereDuplicates Solution (Multiple Pointers)

function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// areThereDuplicates One Liner Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates1(1, 2, 3);
areThereDuplicates1(1, 2, 2);
areThereDuplicates1("a", "b", "c", "a");
