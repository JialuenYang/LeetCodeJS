/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
	const left = [];
	const pivots = [];
	const right = [];
	for (const num of nums) {
		if (num == pivot) {
			pivots.push(pivot);
		} else if (num < pivot) {
			left.push(num);
		} else if (num > pivot) {
			right.push(num);
		}
	}
	return left.concat(pivots).concat(right);
};
