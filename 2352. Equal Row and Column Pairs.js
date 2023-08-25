/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
	// Key looks like "1,2,3,4"
	// Value looks like [1, 3] where first value is the number of times it shows up in rows and second value is number of times it shows up in columns.
	const map = new Map();

	// Adding rows to map
	for (const r of grid) {
		const str = r.join(",");
		if (map.has(str)) {
			map.set(str, [map.get(str)[0] + 1, map.get(str)[1]]);
		} else {
			map.set(str, [1, 0]);
		}
	}

	// Adding cols to map
	for (let i = 0; i < grid[0].length; i++) {
		const arr = [];
		for (let j = 0; j < grid.length; j++) {
			arr.push(grid[j][i]);
		}
		const str = arr.join(",");
		if (map.has(str)) {
			map.set(str, [map.get(str)[0], map.get(str)[1] + 1]);
		}
	}

	let answer = 0;
	for (const [key, val] of map) {
		answer += val[0] * val[1];
	}
	return answer;
};
