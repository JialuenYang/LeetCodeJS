/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	// Simply loop through destinations and then remove all starting cities.
	const set = new Set();
	for (const path of paths) {
		set.add(path[1]);
	}
	for (const path of paths) {
		set.delete(path[0]);
	}
	return set.values().next().value;
};
