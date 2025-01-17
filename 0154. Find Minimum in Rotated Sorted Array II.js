/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if (nums.length == 1) {
		return nums[0];
	}

	let l = 0;
	let r = nums.length - 1;

	if (nums[l] == nums[r]) {
		// Minimum will be somewhere in the range. We don't know if it's in left or right half. So get rid of the duplicates until we know.
		while (nums[l] == nums[r]) {
			r--;
		}
		// All numbers are the same number. Worst case scenario O(n).
		if (r < 0) {
			return nums[0];
		}
	}

	while (l <= r) {
		const m = Math.floor((l + r) / 2);

		if (l == r || nums[l] < nums[r]) {
			return nums[l];
		} else {
			if (nums[m] <= nums[r]) {
				r = m;
			} else {
				l = m + 1;
			}
		}
	}
};
