/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
	// Store letters as keys and [start, end] as values
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.get(s[i])[1] = i;
		} else {
			map.set(s[i], [i, i]);
		}
	}
	const output = [];
	const arr = [...map.values()];
	let start = arr[0][0];
	let end = arr[0][1];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i][0] < end && end < arr[i][1]) {
			// Extend the end of a partition if the letter starts before the previous end
			end = arr[i][1];
		} else if (end < arr[i][0]) {
			// This letter starts after the end of a partition. Push the partition length to output and set new start and end.
			output.push(end + 1 - start);
			start = arr[i][0];
			end = arr[i][1];
		}
	}
	// Remember to push the final partition length.
	output.push(end + 1 - start);
	return output;
};
