/** @format */

// Brut Force Solution
const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 3];
function getTrappedRainWater(heights) {
  let total = 0;
  // need to run for loop which will iterate through the each
  for (let p = 0; p < heights.length; p++) {
    let leftMax = 0,
      rightMax = 0;
    let leftP = p,
      rightP = p;

    //     looking for left sight max value of current pointer
    while (leftP <= 0) {
      leftMax = Math.max(heights[leftP], leftMax);
      leftP--;
    }
    //     looking for right side maxValue of current pointer
    while (rightP < heights.length) {
      rightMax = Math.max(rightMax, heights[rightP]);
      rightP++;
    }
    //     applying the formula
    const currentWater = Math.min(leftMax, rightMax) - heights[p];
    if (currentWater >= 0) total += currentWater;
  }
  console.log(i);
  return total;
}

// Optimal approach

console.log(getTrappedRainWater(heights));
