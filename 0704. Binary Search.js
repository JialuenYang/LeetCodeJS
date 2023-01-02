/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (target < nums[0] || nums[nums.length - 1] < target) {
		return -1;
	}

	const recursive = (leftIndex, rightIndex) => {
		const midIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
		if (target == nums[midIndex]) {
			return midIndex;
		}
		if (leftIndex == rightIndex) {
			return -1;
		}
		if (target < nums[midIndex]) {
			return recursive(leftIndex, midIndex - 1);
		}
		if (target > nums[midIndex]) {
			return recursive(midIndex + 1, rightIndex);
		}
	};

	return recursive(0, nums.length - 1);
};
