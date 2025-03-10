/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
	/**
	 * Time compexlity: O(n*log(n) + m) where n = arr1.length, m = arr2.length
	 * Space complexity: O(m)
	 */
	const set = new Set(arr2);
	const freq = new Map();
	for (const num of arr1) {
		if (set.has(num)) {
			freq.set(num, (freq.get(num) || 0) + 1);
		}
	}
	const output = [];
	for (const num of arr2) {
		if (freq.has(num)) {
			output.push(...new Array(freq.get(num)).fill(num));
		}
	}
	arr1.sort((a, b) => a - b);
	for (const num of arr1) {
		if (!set.has(num)) {
			output.push(num);
		}
	}
	return output;
};
