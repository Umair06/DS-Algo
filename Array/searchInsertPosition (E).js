/** @format */
let nums = [1,3,5,6];
target = 5;

//   Naive Approach
// function searchInsert(nums, eleToSearch) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === eleToSearch) {
//       return i;
//     } else if (nums[i] > eleToSearch) {
//       return i;
//     }
//   }
//   return nums.length;
// }

console.log(searchInsert(nums, target));

// optimal approach using binary search tree algorithm
function searchInsert(nums, target) {
  let left = 0,
    right = nums.length - 1;
    
    while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         console.log(left, right, mid)

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return right + 1;
}
