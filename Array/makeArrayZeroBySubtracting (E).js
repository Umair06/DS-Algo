/**
 * @param {number[]} nums
 * @return {number}
 */

const  nums = [1,5,0,3,5]

 var minimumOperations = function(nums) {
    const hashMap = {}
     for(let i = 0; i < nums.length; i++) {
          const currentVal =  nums[i];
          if(currentVal > 0)
          hashMap[currentVal] = currentVal;
    }
    return Object.keys(hashMap).length
};

console.log(minimumOperations(nums));