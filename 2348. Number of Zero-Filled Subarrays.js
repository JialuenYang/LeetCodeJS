/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
	/**
	 * The key is knowing that the sum of zero subarrays of length X is equal to X + X-1 + X-2 +... +1 = (1 + X) * X / 2
	 * But there's no need to do the math formula, because you can just add count of zeros at every step.
	 * No need to wait for the end of the zero subarray.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let output = 0;
	let zeros = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 0) {
			zeros++;
			output += zeros;
		} else {
			zeros = 0;
		}
	}

	return output;
};
