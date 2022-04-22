/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
	// Count the number each of num in a map
	const map = new Map();
	nums.forEach((n) => {
		if (map.has(n)) {
			map.set(n, map.get(n) + 1);
		} else {
			map.set(n, 1);
		}
	});
	// If any of the count is odd, then it can't be in a pair of equal num.
	for (const [key, value] of map) {
		if (value % 2 == 1) {
			return false;
		}
	}
	return true;
};
