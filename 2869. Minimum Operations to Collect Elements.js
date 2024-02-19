/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
	const arr = [];
	for (let i = 1; i <= k; i++) {
		arr.push(i);
	}
	const set = new Set(arr);

	let i = nums.length - 1;
	set.delete(nums[i]);
	while (set.size != 0) {
		i--;
		set.delete(nums[i]);
	}

	return nums.length - i;
};
