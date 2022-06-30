/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	// Dumbest method
	let i = 1;
	while (i * i <= num) {
		if (i * i == num) {
			return true;
		}
		i++;
	}
	return false;
};
