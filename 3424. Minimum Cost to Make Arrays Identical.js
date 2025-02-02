/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} k
 * @return {number}
 */
var minCost = function (arr, brr, k) {
	/**
	 * Get the unsorted diff sum and compare it to the sorted diff sum + k. Return whichever is smaller.
	 */
	let abDiff = 0;
	for (let i = 0; i < arr.length; i++) {
		abDiff += Math.abs(arr[i] - brr[i]);
	}
	const sorted = arr.toSorted((a, b) => a - b);
	brr.sort((a, b) => a - b);
	let output = 0;
	for (let i = 0; i < arr.length; i++) {
		output += Math.abs(sorted[i] - brr[i]);
	}
	return Math.min(output + k, abDiff);
};
