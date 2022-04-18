/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) return false;
	const str = x.toString();
	let id = 0;
	let id2 = str.length - 1;

	while (id < id2) {
		if (str.charAt(id) !== str.charAt(id2)) return false;

		id++;
		id2--;
	}

	return true;
};
