/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	const map = new Map();
	let output = 0;

	for (num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}

		// If a number has appeared at least twice, it gives n-1 more solutions.
		if (map.get(num) > 1) {
			output += map.get(num) - 1;
		}
	}

	return output;
};
