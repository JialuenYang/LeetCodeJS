/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function (points, s) {
	/**
	 * First, convert point coordinates to a single line distance.
	 * Keep track of the minimum and second minimum distances for each tag.
	 * The lowest second minimum - 1 is the max length of square.
	 * Then count how many points are less than second minimum.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	for (let i = 0; i < points.length; i++) {
		points[i] = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
	}

	const map = new Map();

	for (let i = 0; i < points.length; i++) {
		if (map.has(s[i])) {
			const { min, secondMin } = map.get(s[i]);
			if (points[i] <= min) {
				map.get(s[i]).secondMin = min;
				map.get(s[i]).min = points[i];
			} else if (points[i] <= secondMin) {
				map.get(s[i]).secondMin = points[i];
			}
		} else {
			map.set(s[i], { min: points[i], secondMin: Infinity });
		}
	}

	const secondMin = Math.min(...[...map.values()].map((e) => e.secondMin));

	let output = 0;
	for (const point of points) {
		if (point < secondMin) {
			output++;
		}
	}
	return output;
};
