/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
	const output = [];
	for (const c of s) {
		if (c === "i") {
			output.reverse();
		} else {
			output.push(c);
		}
	}
	return output.join("");
};
