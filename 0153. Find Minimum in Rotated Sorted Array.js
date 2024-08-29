/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		if (nums[l] <= nums[r]) {
			return nums[l];
		}

		const m = Math.floor((l + r) / 2);
		if (nums[l] <= nums[m]) {
			l = m + 1;
		} else {
			r = m; // Can't do r = m - 1 because nums[m] might be the smallest number
		}
	}
};
