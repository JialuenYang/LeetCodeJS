/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
	const x = coordinates.charCodeAt(0) - "a".charCodeAt(0) + 1;
	const y = parseInt(coordinates[1]);

	// Both are odd
	if (x % 2 == 1 && y % 2 == 1) {
		return false;
	}
	// Both are even
	if (x % 2 == 0 && y % 2 == 0) {
		return false;
	}
	return true;
};
