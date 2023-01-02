/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	// Check for vertical line
	const x = coordinates[0][0];
	let isVertical = true;
	for (let i = 1; i < coordinates.length; i++) {
		if (x != coordinates[i][0]) {
			isVertical = false;
		}
	}
	if (isVertical) {
		return true;
	}

	// Check for normal line
	const c1 = coordinates[0];
	const c2 = coordinates[1];
	const m = (c2[1] - c1[1]) / (c2[0] - c1[0]);
	const b = c1[1] - m * c1[0];
	for (const c of coordinates) {
		if (c[1] != m * c[0] + b) {
			return false;
		}
	}
	return true;
};
