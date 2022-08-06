/**
 * /*
 *
 * @format
 * @author meerumairali999@gmail.com
 * @params {Number<Array>} nums
 * @params {Number} target 
 * @desc Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
// Brut force solution

// optimal solution
const nums = [2, 7, 11, 15],
  target = 26;

function fundSumIndicesBF(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const ntf = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (ntf === nums[p2]) return [p1, p2];
    }
  }
  return null;
}
console.log(fundSumIndicesBF(nums, target));

function findSumNumIndices(nums, target) {
  const numsToFind = {};
  for (let i = 0; i <= nums.length; i++) {
    const currentVal = numsToFind[nums[i]];

    if (currentVal >= 0) return [currentVal, i];

    const ntf = target - nums[i];
    numsToFind[ntf] = i;
  }

  return null;
}
console.log(findSumNumIndices(nums, target));
