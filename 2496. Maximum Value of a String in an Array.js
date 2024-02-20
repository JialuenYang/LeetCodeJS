/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
	let output = 0;
	strs.forEach((str) => {
		let hasLetter = false;
		for (const c of str) {
			if (isNaN(c)) {
				hasLetter = true;
				break;
			}
		}
		if (hasLetter) {
			output = Math.max(output, str.length);
		} else {
			output = Math.max(output, parseInt(str));
		}
	});
	return output;
};
