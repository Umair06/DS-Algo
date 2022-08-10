/** @format */
const nums = [
  5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15,
  21,
];
// function sortEventOdd(nums) {
//   for (let i = 0; i < nums.length; 2++) {
//     const isEven = i % 2 === 0;
//     const lowestEventIdx = 0;
//     const lowestOddIdx = 1;
//     if (isEven) {
//       if (nums[lowestEventIdx] > nums[i]) {
//         const temp = nums[lowestEventIdx];
//         nums[lowestEventIdx] = nums[i];
//         nums[i] = temp;
//       }
//     } else {
//       if (nums[lowestOddIdx] < nums[i]) {
//         const temp = nums[lowestOddIdx];
//         nums[lowestOddIdx] = nums[i];
//         nums[i] = temp;
//       }
//     }
//   }
//   return nums;
// }

// function sortEvenOdd(nums) {
//   let i = 0,
//     j = 1;
//   while (i < nums.length) {
//     if (nums[i] % 2 == 0) {
//       i += 2;
//      } else if (nums[j] % 2 === 1) {
//           j += 2;
//      } else {
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//           i += 2;
//           j += 2;
//           console.log(nums);
//      }
// }
//   return nums;
// }

function sortEvenOdd(nums) {
  let i = 1,
    n = nums.length;
  const result = [];
  // last index
  let j = n - 1;

  // if last index is odd
  if (j % 2 != 0)
    // decrement j to even index
    j--;

  // swapping till half of array
  while (i < j) {
    nums = swap(nums, i, j);
    i += 2;
    j -= 2;
  }

  let odd = nums
    .slice(0, Math.floor((n + 1) / 2))
    .sort(function (a, b) {
      return a - b;
    });
  let even = nums
    .slice(Math.floor((n + 1) / 2), n)
    .sort(function (a, b) {
      return b - a;
    });

  const maxLength = Math.max(even.length, odd.length);
  for (let i = 0; i < maxLength; i++) {
    if (odd[i]) result.push(odd[i]);
    if (even[i]) result.push(even[i]);
  }
  return result;
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
  return nums;
}
console.log(sortEvenOdd(nums));
