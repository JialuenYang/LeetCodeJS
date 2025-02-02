/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
	const set = new Set();
	set.add([0, 0].toString());

	const position = [0, 0];
	for (const dir of path) {
		switch (dir) {
			case "N":
				position[1]++;
				break;
			case "S":
				position[1]--;
				break;
			case "E":
				position[0]++;
				break;
			case "W":
				position[0]--;
				break;
		}
		if (set.has(position.toString())) {
			return true;
		}
		set.add(position.toString());
	}

	return false;
};
