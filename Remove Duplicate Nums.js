/**
 * @format
 * @param {number[]} nums
 * @return {number}
 * @description Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4];

function removeDuplicates(nums) {
  for (let i = nums.length - 1; i >= 0; i--)
    if (nums[i] === nums[i - 1]) nums.splice(i, 1);
  return nums.length;
}

console.log(removeDuplicates(nums));
