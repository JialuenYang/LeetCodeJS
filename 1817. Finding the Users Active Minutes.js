/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
	// Save data in a map of set
	const output = new Array(k).fill(0);
	const map = new Map();

	for (let i = 0; i < logs.length; i++) {
		if (map.has(logs[i][0])) {
			map.set(logs[i][0], map.get(logs[i][0]).add(logs[i][1]));
		} else {
			const set = new Set();
			set.add(logs[i][1]);
			map.set(logs[i][0], set);
		}
	}

	for (const value of map.values()) {
		output[value.size - 1]++;
	}

	return output;
};
