/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Make an array of objects of keys and values based on map
	const arr = Array.from(map).map(([key, value]) => ({ key, value }));
	const sorted = arr.sort((a, b) => {
		if (a.value > b.value) {
			return -1;
		}
		if (a.value < b.value) {
			return 1;
		}
		return 0;
	});
	return sorted.slice(0, k).map((element) => element.key);
};
