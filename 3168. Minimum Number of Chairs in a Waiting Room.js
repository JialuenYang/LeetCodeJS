/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
	let minChairs = 0;
	let chairs = 0;
	for (const c of s) {
		chairs += c === "E" ? 1 : -1;
		minChairs = Math.max(minChairs, chairs);
	}
	return minChairs;
};
