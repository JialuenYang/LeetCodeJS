/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
	let maxCharCode = "0".charCodeAt(0);
	for (let i = 0; i < n.length; i++) {
		maxCharCode = Math.max(maxCharCode, n.charCodeAt(i));
	}
	return maxCharCode - "0".charCodeAt(0);
};
