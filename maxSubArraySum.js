// Write a function called maxSubArraySum which accepts an array
// of integers and a number called n. The function should calculate
// the maximum sum of n consecutive elements in the array

function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // get initial max
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubArraySum([2, 1, 5, 2, 1, 8, 5, 6, 3], 3);
