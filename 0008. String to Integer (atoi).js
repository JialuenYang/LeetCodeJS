/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	const arr = [];
	let isPos = true;

	// Skip leading whitespaces
	let i = 0;
	while (s[i] === " ") {
		i++;
		if (i == s.length) {
			break;
		}
	}

	// Determine sign
	if (s[i] === "-" || s[i] === "+") {
		if (s[i] === "-") {
			isPos = false;
		}
		i++;
	}

	// Skip leading zeros
	while (s[i] === "0") {
		i++;
		if (i == s.length) {
			break;
		}
	}

	// Get digits
	while (s.charAt(i) >= "0".charAt(0) && s.charAt(i) <= "9".charAt(0)) {
		arr.push(s[i]);
		i++;
		if (i == s.length) {
			break;
		}
	}

	if (arr.length == 0) {
		return 0;
	}

	let num = parseInt(arr.join(""));
	if (!isPos) {
		num = -num;
	}

	if (num > 2 ** 31 - 1) {
		return 2 ** 31 - 1;
	}
	if (num < -1 * 2 ** 31) {
		return -1 * 2 ** 31;
	}

	return num;
};
