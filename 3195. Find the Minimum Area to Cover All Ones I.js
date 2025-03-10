/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
	/**
	 * Time complexity: O(n^2)
	 * Space complexity: O(1)
	 */
	let top = Infinity;
	let left = Infinity;
	let bottom = -Infinity;
	let right = -Infinity;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				top = Math.min(top, i);
				left = Math.min(left, j);
				bottom = Math.max(bottom, i);
				right = Math.max(right, j);
			}
		}
	}

	return (bottom - top + 1) * (right - left + 1);
};
