/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
	/**
	 * We want to compute the total area covered by the two rectangles. RectArea1 + RectArea2 - OverlapArea
	 * The hard part is calculating the overlapping area.
	 * Overlapping area exists if and only if the two rectangles' x-axises and y-axises both have overlap.
	 */

	// Get overlapping distance for an axis
	const getOverlapDist = (a1, a2, b1, b2) => {
		/** 3 cases
        Case 1: Small overlap
        Case 2: One axis includes another axis
        Case 3: No overlap
         */
		const dist = Math.min(a2, b2) - Math.max(a1, b1);
		if (dist < 0) {
			return 0;
		}
		return dist;
	};

	const areaOfRectangle = (x1, y1, x2, y2) => (y2 - y1) * (x2 - x1);

	const overlapArea =
		getOverlapDist(ax1, ax2, bx1, bx2) * getOverlapDist(ay1, ay2, by1, by2);
	return (
		areaOfRectangle(ax1, ay1, ax2, ay2) +
		areaOfRectangle(bx1, by1, bx2, by2) -
		overlapArea
	);
};
