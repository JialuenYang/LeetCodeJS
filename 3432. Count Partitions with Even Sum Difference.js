/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
	/**
	 * If the total sum is even, then it's possible to create even diff partitions. Moving each number to the left doesn't affect the parity of the diff.
	 */
	const sum = nums.reduce((acc, cur) => acc + cur, 0);
	if (sum % 2 == 0) {
		return nums.length - 1;
	}
	return 0;
};
