/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
	// Set up the first k numbers with frequency and duplicates
	let maxSum = 0;
	let currSum = 0;
	const duplicates = new Set();
	const map = new Map();
	for (let i = 0; i < k; i++) {
		currSum += nums[i];
		if (map.get(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}
		if (map.get(nums[i]) > 1) {
			duplicates.add(nums[i]);
		}
	}

	// IF first k numbers are unique, use that sum
	if (duplicates.size == 0) {
		maxSum = currSum;
	}

	for (let i = k; i < nums.length; i++) {
		// Remove leftmost num
		map.set(nums[i - k], map.get(nums[i - k]) - 1);
		// Check if removing leftmost sum removes duplicate
		if (map.get(nums[i - k]) <= 1) {
			duplicates.delete(nums[i - k]);
		}

		// Add rightmost num
		if (map.get(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}

		// Check if rightmost num makes duplicate
		if (map.get(nums[i]) > 1) {
			duplicates.add(nums[i]);
		}

		// Compare sum only if there are no duplicates
		currSum = currSum - nums[i - k] + nums[i];
		if (duplicates.size == 0) {
			maxSum = Math.max(maxSum, currSum);
		}
	}

	return maxSum;
};
