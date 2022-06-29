/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	return finalString(s) === finalString(t);
};

// Go from right to left so you can skip chars when you get #.
// The chars array is reverse of the actual string since you went from right to left.
// But it doesn't matter because both s and t are reversed.
const finalString = (s) => {
	const chars = [];
	let backspace = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === "#") {
			backspace++;
		} else {
			if (backspace > 0) {
				backspace--;
			} else {
				chars.push(s[i]);
			}
		}
	}
	return chars.join("");
};
