/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
	const arr = [];
	let i = 0;
	while (i < s.length) {
		arr.push(s[i]);
		// Simply skip to a different char when encountering 3 consecutive chars
		if (s[i] === s[i + 1] && s[i] === s[i + 2]) {
			while (s[i] === s[i + 1]) {
				i++;
			}
		} else {
			i++;
		}
	}
	return arr.join("");
};
