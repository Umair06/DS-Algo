/** @format */
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
function removeElement(nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
     }
  }
  return count;
}
console.log(removeElement(nums, 2));
