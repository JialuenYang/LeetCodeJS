/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
	rectangles = rectangles.map((rect) => Math.min(...rect));
	const largest = Math.max(...rectangles);
	let count = 0;
	for (const rect of rectangles) {
		if (rect == largest) {
			count++;
		}
	}
	return count;
};
