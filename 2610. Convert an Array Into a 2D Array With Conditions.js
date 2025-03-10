/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
	const freq = new Map();
	let maxCount = 0;
	for (const num of nums) {
		freq.set(num, (freq.get(num) ?? 0) + 1);
		maxCount = Math.max(maxCount, freq.get(num));
	}

	const output = new Array(maxCount).fill().map(() => new Array());

	for (const [key, val] of freq) {
		for (let i = 0; i < val; i++) {
			output[i].push(key);
		}
	}

	return output;
};
