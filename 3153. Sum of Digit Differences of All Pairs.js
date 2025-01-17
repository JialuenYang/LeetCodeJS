/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
	/**
	 * Time complexity: O(n * m) where n = nums.length, m = number of digits
	 * Space complexity: O(1)
	 */
	let output = 0;
	while (nums[0] >= 1) {
		const freq = new Array(10).fill(0);
		let totalFreq = 0;
		for (let i = 0; i < nums.length; i++) {
			const digit = nums[i] % 10;
			freq[digit]++;
			totalFreq++;
			nums[i] = Math.floor(nums[i] / 10);
		}

		let prevFreqCount = 0;
		for (const f of freq) {
			output += f * (totalFreq - prevFreqCount - f);
			prevFreqCount += f;
		}
	}

	return output;
};
