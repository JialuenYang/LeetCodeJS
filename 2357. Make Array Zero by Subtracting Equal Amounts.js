/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	// Must realize the concept behind the question. Every unique number above 0 must be subtracted separately.
	// So we don't actually have to do the math and subtract. We just need to count the number of unique numbers above 0.
	const set = new Set(nums);
	set.delete(0);
	return set.size;
};
