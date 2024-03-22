/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	let output = 0;
	const set = new Set(nums);
	for (const num of nums) {
		// Check if this number is the start of a sequence (meaning no left neighbor)
		if (!set.has(num - 1)) {
			let i = 1;
			while (set.has(num + i)) {
				i++;
			}
			output = Math.max(output, i);
		}
	}

	return output;
};
