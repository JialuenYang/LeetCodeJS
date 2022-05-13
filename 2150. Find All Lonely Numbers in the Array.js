/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
	const map = new Map();

	// Keep track of unique numbers
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], 2);
		} else {
			map.set(nums[i], 1);
		}
	}

	const output = [];
	// Check if a number is unique and the map has no adjacent numbers
	for (const [key, val] of map) {
		if (val == 1 && !map.has(key - 1) && !map.has(key + 1)) {
			output.push(key);
		}
	}
	return output;
};
