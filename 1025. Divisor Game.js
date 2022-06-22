/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
	// The key here is realizing that if there is an even number left and it's your turn, you always win.
	return n % 2 == 0;
};
