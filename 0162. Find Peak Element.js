/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	// The description didn't say but the constraint says nums[i] != nums[i + 1] for all valid i. This is what allows us to use binary search.
	if (nums.length == 1) {
		return 0;
	}
	if (nums[0] > nums[1]) {
		return 0;
	}
	if (nums[nums.length - 2] < nums[nums.length - 1]) {
		return nums.length - 1;
	}

	let l = 0;
	let r = nums.length - 1;
	let m = 0;

	while (l < r) {
		m = Math.floor((l + r) / 2);
		if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
			return m;
		}
		if (nums[m - 1] > nums[m]) {
			r = m;
		} else {
			l = m;
		}
	}
};
