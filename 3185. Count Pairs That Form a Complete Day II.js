/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
	// Same problem as 3184
	let output = 0;
	const arr = new Array(24).fill(0);
	for (let hour of hours) {
		hour = hour % 24;
		const complement = (24 - hour) % 24;
		output += arr[complement];
		arr[hour]++; // Do this at the end due to 0 and 12 needing to count itself.
	}
	return output;
};
