/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	const set = new Set();
	for (jewel of jewels) {
		set.add(jewel);
	}

	let output = 0;
	for (stone of stones) {
		if (set.has(stone)) {
			output++;
		}
	}
	return output;
};
