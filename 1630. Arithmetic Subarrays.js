/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
	// Populate the output array with TRUE first, then loop through the subarrays to update with FALSE when needed.
	const output = new Array(l.length).fill(true);
	for (let i = 0; i < l.length; i++) {
		const subArray = nums.slice(l[i], r[i] + 1);
		// Remember that default sort() in Javascript converts to String then compare. This will NOT work with negative numbers.
		// a - b sorts from small to big
		subArray.sort((a, b) => a - b);
		const diff = subArray[0] - subArray[1];
		for (let j = 1; j < subArray.length - 1; j++) {
			if (subArray[j] - subArray[j + 1] != diff) {
				output[i] = false;
				break;
			}
		}
	}
	return output;
};
