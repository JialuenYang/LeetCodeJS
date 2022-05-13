/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
	// O(nlogn) due to sorting
	// Try this method for O(n)
	// Try this method for O(n): https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/686335/JavaPython-3-Greedy-Alg.%3A-3-methods-from-O(nlogn)-to-O(n)-w-brief-explanation-and-analysis.
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
		} else {
			map.set(arr[i], 1);
		}
	}

	const sorted = [...map.values()].sort((a, b) => a - b);
	let index = 0;
	while (k > 0) {
		if (k >= sorted[index]) {
			k -= sorted[index];
			sorted[index] = 0;
		} else if (sorted[index] - k == 1) {
			if (index != sorted.length - 1) {
				sorted[index + 1]--;
			} else {
				sorted[index] = 1;
			}
			k = 0;
		} else {
			sorted[index] -= k;
			k = 0;
		}
		index++;
	}
	return sorted.filter((num) => num > 0).length;
};
