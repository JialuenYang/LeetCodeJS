/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
	// Problem reduces to just sorting each row and finding the max per column
	for (let i = 0; i < grid.length; i++) {
		grid[i].sort((a, b) => a - b);
	}
	let answer = 0;
	for (let i = 0; i < grid[0].length; i++) {
		let max = 0;
		for (let j = 0; j < grid.length; j++) {
			max = Math.max(grid[j][i], max);
		}
		answer += max;
	}
	return answer;
};
