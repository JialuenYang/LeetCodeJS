/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	const str = number.split(/[- ]+/).join("");
	const output = [];
	if (str.length % 3 == 1) {
		for (let i = 0; i < str.length - 4; i += 3) {
			output.push(str.slice(i, i + 3));
		}
		for (let i = str.length - 4; i < str.length; i += 2) {
			output.push(str.slice(i, i + 2));
		}
	} else {
		for (let i = 0; i < str.length; i += 3) {
			output.push(str.slice(i, i + 3));
		}
	}
	return output.join("-");
};
