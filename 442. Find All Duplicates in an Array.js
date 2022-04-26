/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	// Since it's guaranteed that the numbers will be 1 <= nums[i] <= nums.length
	// We can safely use the input nums array to keep track of visited numbers via negative sign.
	const duplicates = [];
	for (let i = 0; i < nums.length; i++) {
		const posN = Math.abs(nums[i]);
		if (nums[posN - 1] < 0) {
			// Visited already, push to duplicates array.
			duplicates.push(posN);
		} else {
			// First visit, mark as negative.
			nums[posN - 1] = -1 * nums[posN - 1];
		}
	}
	return duplicates;
};
