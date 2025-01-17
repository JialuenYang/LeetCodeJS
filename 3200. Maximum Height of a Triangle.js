/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
	/**
     * This uses math to calculate. It's slower when running the test cases simply because the constraints are too small. 
     * Time complexity: O(log n) due to the use of Math.sqrt()
     * 
     * My intuition is the same as some other people's: https://leetcode.com/problems/maximum-height-of-a-triangle/
     * 
    Even row height
    (up + down) * height / 2 <= red
    (2 + 2 * height) * height <= red * 2
    2 * ( 1 + height) * height <= red * 2
    (1 + h) * h <= red
    h ^ 2 + h - red = 0
    h = -1 + sqrt(1+ 4*red) / 2

    Odd row height
    (up + down) * height / 2 <= blue
    (1 + 1 + 2 * (height - 1)) * height / 2 <= blue
    (2 + 2 * (height - 1)) * height <= blue * 2
    (1 + height - 1) * height <= blue
    height ^ 2 <= blue
    h <= sqrt(blue)
    */

	const totalRows = (even, odd) => {
		const evenRows = Math.floor((-1 + Math.sqrt(1 + 4 * even)) / 2);
		const oddRows = Math.floor(Math.sqrt(odd));

		// Be careful when calculating the total number of rows.
		if (evenRows == oddRows) {
			return evenRows + oddRows;
		}

		if (evenRows < oddRows) {
			return evenRows * 2 + 1;
		}

		return oddRows * 2;
	};

	return Math.max(totalRows(red, blue), totalRows(blue, red));
};
