/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	// Bucket sort. Array length of nums.length where index is frequency and value is array of nums.
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	const freq = [...Array(nums.length)].map((_) => new Array());
	for (const [key, val] of map) {
		freq[val - 1].push(key);
	}

	let output = [];
	let i = freq.length - 1;
	while (k > 0) {
		if (freq[i].length > 0) {
			output.push(...freq[i]);
			k -= freq[i].length;
		}
		i--;
	}
	return output;
};
