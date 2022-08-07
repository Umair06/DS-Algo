/**
 * /*
 
 @format
@author meerumairali999@gmail.com
@param {number} height
@return {number}
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxArea(heights) {
  let p1 = 0,
    p2 = heights.length - 1,
    maxWater = 0;
  console.log(maxWater);
  while (p1 < p2) {
    const left = heights[p1];
    const right = heights[p2];
    const height = Math.min(left, right);
    const width = p2 - p1;
    const maxArea = width * height;
    maxWater = Math.max(maxWater, maxArea);
    console.log(left, right, p1, p2);
    if (left < right) p1++;
    else p2--;
  }

  return maxWater;
}

console.log(maxArea(height));
