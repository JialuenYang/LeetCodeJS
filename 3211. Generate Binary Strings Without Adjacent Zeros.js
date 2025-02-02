/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
	const output = [];
	const arr = ["0", "1"];

	while (arr.length > 0) {
		const str = arr.pop();
		if (str.length == n) {
			output.push(str);
			continue;
		}
		if (str[str.length - 1] === "1") {
			arr.push(str + "0");
		}
		arr.push(str + "1");
	}

	return output;
};
