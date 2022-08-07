/** @format */

/**
 * @param {number[]} height
 * @return {number}
 * @Description Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 */
// Brut Force Solution -- trapping rainwater
const heights = [4, 2, 0, 3, 2, 5];
function getTrappedRainWaterBrutForce(heights) {
  let total = 0;
  // need to run for loop which will iterate through the each
  for (let p = 0; p < heights.length; p++) {
    let leftMax = 0,
      rightMax = 0;
    let leftP = p,
      rightP = p;

    //     looking for left sight max value of current pointer
    while (leftP >= 0) {
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
  return total;
}

// Optimal Solution -- trapping rainwater
function getRainTrapWaterOptimalSol(heights) {
  let left = 0,
    right = heights.length - 1,
    total = 0,
    maxLeft = 0,
    maxRight = 0;

  // make the while loop un tile both pointer get nearest to gether but not overlapping each other.
  while (left < right) {
    // decide whether left or right should be move
    if (maxLeft <= maxRight) {
      // if current left is greater the the maxLeft then we need to set the current ele as the maxLeft
      if (maxLeft < heights[left]) {
        maxLeft = heights[left];
      }
      // if current ele is lesser than the maxLeft ele then its mean it can contain the water in that position to
      // we subtraction the height of the current  ele from maxLeft ele
      else {
        const water = maxLeft - heights[left];
        total += water;
      }
      left++;
    } else {
      if (maxRight < heights[right]) {
        maxRight = heights[right];
      } else {
        const water = maxRight - heights[right];
        total += water;
      }
      right--;
    }
  }
  return total;
}

console.log(getRainTrapWaterOptimalSol(heights));
