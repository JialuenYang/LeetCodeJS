/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);

	const output = [];

	let i = 0;
	while (i <= nums.length - 4) {
		let j = i + 1;
		while (j <= nums.length - 3) {
			let l = j + 1;
			let r = nums.length - 1;
			while (l < r) {
				const fourSum = nums[i] + nums[j] + nums[l] + nums[r];
				if (fourSum == target) {
					output.push([nums[i], nums[j], nums[l], nums[r]]);
					l++;
					while (nums[l - 1] == nums[l]) {
						l++;
					}
				} else if (fourSum < target) {
					l++;
				} else {
					r--;
				}
			}

			j++;
			while (nums[j - 1] == nums[j]) {
				j++;
			}
		}

		i++;
		while (nums[i - 1] == nums[i]) {
			i++;
		}
	}

	return output;
};
