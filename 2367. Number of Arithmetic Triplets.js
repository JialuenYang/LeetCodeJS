/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
	// Use a set to keep track of all numbers. Array has unique elements so set size should be the same as array length.
	const set = new Set(nums);
	let answer = 0;
	// For each number, check if the numbers + diff and - diff exist in set.
	for (let i = 1; i < nums.length - 1; i++) {
		if (set.has(nums[i] - diff) && set.has(nums[i] + diff)) {
			answer++;
		}
	}
	return answer;
};
