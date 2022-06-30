/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	const output = [];
	const set = new Set();
	for (const n of nums) {
		if (set.has(n)) {
			output[0] = n;
		}
		set.add(n);
	}
	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) {
			output[1] = i;
			return output;
		}
	}
};
