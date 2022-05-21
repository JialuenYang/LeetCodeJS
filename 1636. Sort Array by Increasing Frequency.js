/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
	// Keep track of num frequency in a map
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Custom comparator
	nums.sort((a, b) => {
		const aFreq = map.get(a);
		const bFreq = map.get(b);
		if (aFreq == bFreq) {
			return b - a;
		}
		return aFreq - bFreq;
	});
	return nums;
};
