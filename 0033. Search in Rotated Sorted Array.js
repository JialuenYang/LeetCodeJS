/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let l = 0;
	let r = nums.length - 1;
	while (l <= r) {
		const m = Math.floor((l + r) / 2);

		if (nums[m] == target) {
			return m;
		}

		// No need to do normal case separately. The following will handle it.

		if (nums[m] < nums[r]) {
			if (nums[m] < target && target <= nums[r]) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		} else {
			if (nums[l] <= target && target < nums[m]) {
				r = m - 1;
			} else {
				l = m + 1;
			}
		}
	}

	return -1;
};
