/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
	const arr = s.split(" ");
	let highestCharCount = 0;
	for (const word of arr) {
		if (word.length > highestCharCount) {
			highestCharCount = word.length;
		}
	}
	const output = new Array(highestCharCount).fill("");
	for (let i = 0; i < highestCharCount; i++) {
		for (let j = 0; j < arr.length; j++) {
			// Add a space if the word is already finished
			if (i >= arr[j].length) {
				output[i] += " ";
			} else {
				output[i] += arr[j][i];
			}
		}
		// Remove trailing spaces
		output[i] = output[i].replace(/\s+$/, "");
	}
	return output;
};
