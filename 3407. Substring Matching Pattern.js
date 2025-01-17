/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
	/**
	 * Split p by '*', find split[0] from left end, find split[1] from right end. Check if they overlap.
	 * Time complexity: O(n * m) due to string comparison
	 * Space complexity: O(m) in this code but can be reduced to O(1)
	 */

	// Base case. * is s
	if (p === "*") {
		return true;
	}
	// Case 2: * is at index 0. Only need to find right split.
	if (p[0] === "*") {
		return s.includes(p.substring(1));
	} else if (p[p.length - 1] === "*") {
		// Case 3: * is at last index. Only need to find left split.
		return s.includes(p.substring(0, p.length - 1));
	}

	const split = p.split("*");

	const index1 = s.indexOf(split[0]);
	if (index1 == -1) {
		return false;
	}
	const index2 = s.lastIndexOf(split[1]);
	if (index2 == -1) {
		return false;
	}

	return index1 + split[0].length <= index2;
};
