/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
	// The key is knowing that each array has distinct integers, meaning we simply need to count the occurrence of each integer and make sure it's equal to nums.length.
	const map = new Map();
	for (const arr of nums) {
		for (const num of arr) {
			if (map.has(num)) {
				map.set(num, map.get(num) + 1);
			} else {
				map.set(num, 1);
			}
		}
	}
	const output = [];
	for (const [key, val] of map) {
		if (val == nums.length) {
			output.push(key);
		}
	}
	return output.sort((a, b) => a - b);
};
