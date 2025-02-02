/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
	return queries.map((q) => {
		let count = 0;
		const [x1, y1, r] = q;
		for (const [x2, y2] of points) {
			if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= r ** 2) {
				count++;
			}
		}
		return count;
	});
};
