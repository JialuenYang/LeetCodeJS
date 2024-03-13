/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort((a, b) => a - b);

	const output = [];

	let i = 0;
	while (i <= nums.length - 3) {
		let l = i + 1;
		let r = nums.length - 1;
		const target = 0 - nums[i];
		while (l < r) {
			if (nums[l] + nums[r] == target) {
				output.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l - 1] == nums[l]) {
					l++;
				}
			} else if (nums[l] + nums[r] < target) {
				l++;
			} else {
				r--;
			}
		}

		// Remember to skip duplicates only after you've checked once at the beginning.
		i++;
		while (nums[i - 1] == nums[i]) {
			i++;
		}
	}

	return output;
};
