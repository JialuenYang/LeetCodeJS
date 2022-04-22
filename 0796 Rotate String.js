/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
	// If the string lengths are not the same, they can't match no matter the number of rotations.
	if (s.length !== goal.length) {
		return false;
	}
	// Two connected s string will include a goal string somewhere if they match.
	if ((s + s).includes(goal)) {
		return true;
	}
	return false;
};
