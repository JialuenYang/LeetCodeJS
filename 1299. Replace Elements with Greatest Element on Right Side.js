/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
	// Go from right to left
	let greatest = arr[arr.length - 1];
	for (let i = arr.length - 2; i >= 0; i--) {
		const temp = greatest;
		if (arr[i] > greatest) {
			greatest = arr[i];
		}
		arr[i] = temp;
	}
	arr[arr.length - 1] = -1;
	return arr;
};
