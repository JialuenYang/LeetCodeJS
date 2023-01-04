/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
	const output = [];
	let index = 0;
	for (let i = 0; i < s.length; i++) {
		if (i == spaces[index]) {
			output.push(" ");
			index++;
		}
		output.push(s[i]);
	}
	return output.join("");
};
