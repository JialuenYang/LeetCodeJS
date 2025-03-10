/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
	/**
	 * Steps:
	 * 1. XOR all elements of the array
	 * 2. XOR k as well because if the bits are different, XOR will give 1.
	 * 3. Count the number of 1's
	 */
	const diffBinary = nums.reduce((acc, cur) => acc ^ cur, k).toString(2);
	let output = 0;
	for (const c of diffBinary) {
		if (c === "1") {
			output++;
		}
	}
	return output;
};
