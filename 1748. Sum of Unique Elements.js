/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	let output = 0;
	for (const [key, val] of map) {
		if (val == 1) {
			output += key;
		}
	}
	return output;
};
