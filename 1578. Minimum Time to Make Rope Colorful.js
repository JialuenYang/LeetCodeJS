/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
	// Loop through the times to check for the highest time and subtract it from total time whenever encountering a new color
	let output = neededTime[0];
	let currentHighestTime = neededTime[0];
	for (let i = 1; i < colors.length; i++) {
		output += neededTime[i];

		// I'm a differnet color
		if (colors[i] !== colors[i - 1]) {
			output -= currentHighestTime;
			currentHighestTime = neededTime[i];
		}

		if (neededTime[i] > currentHighestTime) {
			currentHighestTime = neededTime[i];
		}
	}
	output -= currentHighestTime;

	return output;
};
