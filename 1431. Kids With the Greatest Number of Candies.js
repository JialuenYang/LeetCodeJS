/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	// Find the max candies
	let greatest = 0;
	for (let i = 0; i < candies.length; i++) {
		greatest = Math.max(candies[i], greatest);
	}
	// Fill the array with false. Then set to true if it can have greatest number of candies.
	const output = new Array(candies.length).fill(false);
	for (let i = 0; i < output.length; i++) {
		if (candies[i] + extraCandies >= greatest) {
			output[i] = true;
		}
	}
	return output;
};
