/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
	const output = [];
	const arr = s.split("#");
	const aASCII = "a".charCodeAt(0) - 1;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr[i].length - 2; j++) {
			output.push(String.fromCharCode(aASCII + parseInt(arr[i][j])));
		}
		output.push(
			String.fromCharCode(
				aASCII + parseInt(arr[i].substring(arr[i].length - 2))
			)
		);
	}

	// Does not end with '#'
	if (arr[arr.length - 1].length > 0) {
		for (let j = 0; j < arr[arr.length - 1].length; j++) {
			output.push(
				String.fromCharCode(aASCII + parseInt(arr[arr.length - 1][j]))
			);
		}
	}
	return output.join("");
};
