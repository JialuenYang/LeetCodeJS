/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
	const map = new Map();
	for (const num of nums) {
		if (num % 2 == 0) {
			if (map.has(num)) {
				map.set(num, map.get(num) + 1);
			} else {
				map.set(num, 1);
			}
		}
	}
	if (map.size == 0) {
		return -1;
	}
	let maxFrequency = 0;
	for (const count of map.values()) {
		maxFrequency = Math.max(maxFrequency, count);
	}
	let smallestNum = Infinity;
	for (const [key, value] of map) {
		if (value == maxFrequency) {
			smallestNum = Math.min(smallestNum, key);
		}
	}
	return smallestNum;
};
