/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
	const freq = new Map();
	let maxFreq = 0;
	for (const num of nums) {
		freq.set(num, (freq.get(num) || 0) + 1);
		maxFreq = Math.max(maxFreq, freq.get(num));
	}

	let count = 0;
	for (const val of freq.values()) {
		if (val == maxFreq) {
			count++;
		}
	}
	return count * maxFreq;
};
