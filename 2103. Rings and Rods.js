/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
	// A ton of different ways to do this. Populating an array of 3 booleans sounds good too.
	const R = new Set();
	for (let i = 0; i < rings.length; i += 2) {
		if (rings[i] === "R") {
			R.add(rings[i + 1]);
		}
	}
	const G = new Set();
	for (let i = 0; i < rings.length; i += 2) {
		if (rings[i] === "G" && R.has(rings[i + 1])) {
			G.add(rings[i + 1]);
		}
	}
	const B = new Set();
	for (let i = 0; i < rings.length; i += 2) {
		if (rings[i] === "B" && G.has(rings[i + 1])) {
			B.add(rings[i + 1]);
		}
	}
	return B.size;
};
