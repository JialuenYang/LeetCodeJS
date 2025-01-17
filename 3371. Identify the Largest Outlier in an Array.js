/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function (nums) {
	/**
	 * Use Hash Map to keep track of the frequency of each num. Loop through each key and pretend it's an outlier.
	 */
	const sum = nums.reduce((acc, cur) => acc + cur, 0);
	const freq = new Map();
	for (const num of nums) {
		freq.set(num, (freq.get(num) ?? 0) + 1);
	}

	let biggestOutlier = -Infinity;

	for (const [outlier, count] of freq) {
		const specialSum = (sum - outlier) / 2;
		if (specialSum == outlier) {
			// In case of Outlier == Special Numbers Sum, the fequency count has to be >= 2.
			if (count >= 2) {
				biggestOutlier = Math.max(biggestOutlier, outlier);
			}
		} else if (freq.has(specialSum)) {
			biggestOutlier = Math.max(biggestOutlier, outlier);
		}
	}

	return biggestOutlier;
};
