/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	// Use a map to keep track of number occurances
	const map = new Map();
	for (const num of arr) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Use a set to check for unique occurances
	const set = new Set();
	for (const val of map.values()) {
		if (set.has(val)) {
			return false;
		}
		set.add(val);
	}
	return true;
};
