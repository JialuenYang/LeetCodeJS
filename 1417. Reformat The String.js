/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
	s = s.split("");
	const letters = s.filter((c) => c >= "a" && c <= "z");
	const digits = s.filter((c) => c >= "0" && c <= "9");

	if (Math.abs(letters.length - digits.length) > 1) {
		return "";
	}

	const offset = letters.length >= digits.length ? 0 : 1;
	for (let i = 0; i < letters.length; i++) {
		s[2 * i + offset] = letters[i];
	}
	for (let i = 0; i < digits.length; i++) {
		s[2 * i + 1 - offset] = digits[i];
	}
	return s.join("");
};
