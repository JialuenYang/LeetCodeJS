/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
	// Instead of making 3 sets and checking 3 times, I made 2 sets and checked once.
	const map = new Map();
	for (const num of nums1) {
		if (!map.has(num)) {
			map.set(num, 1);
		}
	}
	const set2 = new Set();
	for (const num of nums2) {
		if (set2.has(num)) {
			continue;
		}
		set2.add(num);

		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	const set3 = new Set();
	for (const num of nums3) {
		if (set3.has(num)) {
			continue;
		}
		set3.add(num);

		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	const output = [];
	for (const [key, val] of map) {
		if (val >= 2) {
			output.push(key);
		}
	}
	return output;
};
