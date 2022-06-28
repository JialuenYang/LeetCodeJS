/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
	const arr = s.split(" ").filter((str) => !isNaN(str));
	for (let i = 0; i < arr.length - 1; i++) {
		if (Number(arr[i]) >= Number(arr[i + 1])) {
			return false;
		}
	}
	return true;
};
