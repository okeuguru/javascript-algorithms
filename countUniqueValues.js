// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array but it will always be sorted

function countUniqueValues(sortedArray) {
  arrayLength = sortedArray.length;
  if (arrayLength === 0) return 0;
  let i = 0;

  console.log(`Array is ${arrayLength} characters long`);
  for (let j = 1; j < arrayLength; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      i++;
      sortedArray[i] = sortedArray[j];
    }
  }
  console.log(`There are ${i + 1} unique arrays`);
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
