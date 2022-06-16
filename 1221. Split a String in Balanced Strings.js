/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	/**
	 * The wording of the problem isn't that clear.
	 * s is a balanced string
	 * All strings split from s must also be balanced strings.
	 * That's how we can fulfill the requirement with so little code.
	 **/
	let count = 0;
	let output = 0;
	for (const c of s) {
		if (c === "L") {
			count++;
		} else {
			count--;
		}
		if (count == 0) {
			output++;
		}
	}
	return output;
};
