/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
	// We only care about the position and occurence of target.
	// We can get both by using a single for loop. Position is just the count of all numbers less than target.
	let count = 0;
	let position = 0;
	for (const num of nums) {
		if (num == target) {
			count++;
		}
		if (num < target) {
			position++;
		}
	}
	const output = [];
	for (let i = 0; i < count; i++) {
		output.push(position + i);
	}
	return output;
};
