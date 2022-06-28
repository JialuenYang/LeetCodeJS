/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
	// No need to slice the array. Just start and end at the new indices when for looping.
	arr.sort((a, b) => a - b);
	const cutOff = Math.floor(arr.length * 0.05);
	let sum = 0;
	for (let i = cutOff; i < arr.length - cutOff; i++) {
		sum += arr[i];
	}
	return sum / (arr.length - cutOff * 2);
};
