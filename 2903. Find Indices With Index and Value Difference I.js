/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
	/**
	 * Keep track of the minimum and maximum values and their indices to do this in O(n)
	 * We only need one pair to work so keeping track of the min and max of all values left of and including current index means we don't need to do O(n^2) comparisons.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let min = nums[0];
	let minIndex = 0;
	let max = nums[0];
	let maxIndex = 0;

	for (let i = 0; i < nums.length - indexDifference; i++) {
		if (nums[i] < min) {
			min = nums[i];
			minIndex = i;
		}

		if (Math.abs(min - nums[i + indexDifference]) >= valueDifference) {
			return [minIndex, i + indexDifference];
		}

		if (nums[i] > max) {
			max = nums[i];
			maxIndex = i;
		}

		if (Math.abs(max - nums[i + indexDifference]) >= valueDifference) {
			return [maxIndex, i + indexDifference];
		}
	}

	return [-1, -1];
};
