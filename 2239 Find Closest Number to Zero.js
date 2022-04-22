/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
	// Set the lowest possible number first
	let output = -1 * 10 ** 5;
	// Keeps track of numbers that are equal distance to zero. Since we only want the bigger value, which is the positive one.
	let isPos = false;
	// Loop through the nums array to find the closest number.
	nums.forEach((n) => {
		if (Math.abs(n) == Math.abs(output)) {
			if (n > 0) {
				isPos = true;
			}
		} else if (Math.abs(n) < Math.abs(output)) {
			output = n;
			isPos = false;
		}
	});
	// Return the output if a positive version of the number is in nums. Else, return the output.
	return isPos ? Math.abs(output) : output;
};
