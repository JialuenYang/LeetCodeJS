/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);

	let closest = nums[0] + nums[1] + nums[2];

	let i = 0;
	while (i <= nums.length - 3) {
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			const threeSum = nums[i] + nums[l] + nums[r];
			if (Math.abs(target - closest) > Math.abs(target - threeSum)) {
				closest = threeSum;
			}

			if (threeSum == target) {
				return target;
			} else if (threeSum < target) {
				l++;
			} else {
				r--;
			}
		}

		i++;
		while (nums[i - 1] == nums[i]) {
			i++;
		}
	}

	return closest;
};
