/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let left = 1;
	let right = n;
	while (left <= right) {
		const mid = Math.floor((right - left) / 2) + left;
		const newGuess = guess(mid);
		if (newGuess == 0) {
			return mid;
		}
		if (newGuess == -1) {
			right = mid - 1;
		}
		if (newGuess == 1) {
			left = mid + 1;
		}
	}
	return 1;
};
