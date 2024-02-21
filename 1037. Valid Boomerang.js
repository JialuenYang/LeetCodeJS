/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
	// Check for vertical line
	if (points[0][0] == points[1][0] && points[1][0] == points[2][0]) {
		return false;
	}

	const set = new Set();
	// Duplicate first coordinate so I can do for loop
	points.push(points[0]);
	for (let i = 0; i < points.length - 1; i++) {
		const slope =
			(points[i][1] - points[i + 1][1]) / (points[i][0] - points[i + 1][0]);
		if (set.has(slope)) {
			return false;
		}
		set.add(slope);
	}

	return true;
};
