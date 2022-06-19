/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
	// Turn array into a map of num occurences
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Only need to check either key + k or key - k, since it's only counted once.
	let output = 0;
	for (const [key, val] of map) {
		if (map.has(key + k)) {
			output += val * map.get(key + k);
		}
	}
	return output;
};
