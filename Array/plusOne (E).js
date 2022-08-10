/** @format */
// incomplete
function plusOne(nums) {
  const lastEle = nums.length - 1;
  const secondLastEle = nums.length - 2;
  if (secondLastEle === 9) {
    nums[secondLastEle] = 1;
    nums[secondLastEle] = 0;
  }
}
