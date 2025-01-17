/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
	// Same problem as 2903
	let minIndex = 0;
	let maxIndex = 0;

	for (let i = 0; i < nums.length - indexDifference; i++) {
		if (nums[i] < nums[minIndex]) {
			minIndex = i;
		}

		if (
			Math.abs(nums[minIndex] - nums[i + indexDifference]) >= valueDifference
		) {
			return [minIndex, i + indexDifference];
		}

		if (nums[i] > nums[maxIndex]) {
			maxIndex = i;
		}

		if (
			Math.abs(nums[maxIndex] - nums[i + indexDifference]) >= valueDifference
		) {
			return [maxIndex, i + indexDifference];
		}
	}

	return [-1, -1];
};
