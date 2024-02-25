/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		const binary = i.toString(2);
		let numOf1s = 0;
		for (const bit of binary) {
			if (bit === "1") {
				numOf1s++;
			}
		}
		if (numOf1s == k) {
			sum += nums[i];
		}
	}
	return sum;
};
