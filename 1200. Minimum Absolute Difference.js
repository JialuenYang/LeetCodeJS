/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	// Must sort the array first
	arr.sort((a, b) => a - b);
	let minDiff = Infinity;
	for (let i = 0; i < arr.length - 1; i++) {
		minDiff = Math.min(arr[i + 1] - arr[i], minDiff);
	}
	const output = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] == minDiff) {
			output.push([arr[i], arr[i + 1]]);
		}
	}
	return output;
};
