/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
	if (s.length == 1) {
		return s[0] === "1";
	}

	let longest0 = 0;
	let longest1 = 0;
	let current0 = 0;
	let current1 = 0;
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === "0" && s[i] === s[i + 1]) {
			current0++;
			longest0 = Math.max(current0, longest0);
		}
		if (s[i] === "1" && s[i] === s[i + 1]) {
			current1++;
			longest1 = Math.max(current1, longest1);
		}
		if (s[i] !== s[i + 1]) {
			current0 = 0;
			current1 = 0;
		}
	}

	return longest1 > longest0;
};
