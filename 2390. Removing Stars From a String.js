/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
	const output = [];
	// Keeps track of how many letters to skip
	let stars = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === "*") {
			stars++;
		} else {
			if (stars == 0) {
				output.push(s[i]);
			} else {
				stars--;
			}
		}
	}
	return output.reverse().join("");
};
