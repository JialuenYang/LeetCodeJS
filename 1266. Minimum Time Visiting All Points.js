/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
	let time = 0;
	for (let i = 0; i < points.length - 1; i++) {
		// Move diagnolly whenever you can. This also means you only need the longer side.
		const xDiff = Math.abs(points[i][0] - points[i + 1][0]);
		const yDiff = Math.abs(points[i][1] - points[i + 1][1]);
		time += Math.max(xDiff, yDiff);
	}
	return time;
};
