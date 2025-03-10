/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	/**
	 * Time complexity: O(n*log(n) + n*2^n) -> O(n*2^n)
	 * Space complexity: O(1)
	 */

	nums.sort((a, b) => a - b);

	const output = [[]];
	let i = 0;
	while (i < nums.length) {
		const start = i;
		while (nums[i] == nums[i + 1]) {
			i++;
		}
		const freq = i - start + 1;
		const len = output.length;
		for (let j = 0; j < len; j++) {
			for (let k = 1; k <= freq; k++) {
				output.push([...output[j]].concat(new Array(k).fill(nums[i])));
			}
		}
		i++;
	}
	return output;
};
