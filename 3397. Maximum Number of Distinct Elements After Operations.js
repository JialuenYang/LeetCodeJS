/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
	/**
	 * Time: O(nlogn)
	 * Space: O(1)
	 *
	 * Sort from small to big. Start filling from the smallest possible range that is open.
	 */
	nums.sort((a, b) => a - b);

	let distinct = 0;
	let openSpot = -Infinity;
	for (const num of nums) {
		if (openSpot <= num - k) {
			distinct++;
			openSpot = num - k + 1;
		} else if (openSpot <= num + k) {
			distinct++;
			openSpot++;
		}
	}
	return distinct;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
	/**
	 * Time: O(nlogn)
	 * Space: O(n)
	 *
	 * Sort from small to big. Start filling from the smallest possible range that is open.
	 */
	const freqs = new Map();
	for (const num of nums) {
		freqs.set(num, (freqs.get(num) ?? 0) + 1);
	}

	const sortedNums = [...freqs.keys()].sort((a, b) => a - b);
	let openPos = sortedNums[0] - k;
	let distinctCount = 0;
	for (const num of sortedNums) {
		const freq = freqs.get(num);
		const start = Math.max(openPos, num - k);
		openPos = Math.min(start + freq - 1, num + k) + 1;
		distinctCount += openPos - start;
	}
	return distinctCount;
};
