/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let count = 0;
	let i = 0;
	let temp = 0;
	while (i < nums.length) {
		if (nums[i] != val) {
			count++;
			if (temp != i && nums[temp] != nums[i]) {
				nums[temp] = nums[i];
			}
			temp++;
		}
		i++;
	}

	return count;
};
