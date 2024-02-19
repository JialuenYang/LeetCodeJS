/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
	const even1 = new Array(26).fill(0);
	const odd1 = new Array(26).fill(0);
	const even2 = new Array(26).fill(0);
	const odd2 = new Array(26).fill(0);

	const aCharCode = "a".charCodeAt(0);

	for (let i = 0; i < s1.length; i++) {
		if (i % 2 == 0) {
			even1[s1.charCodeAt(i) - aCharCode]++;
			even2[s2.charCodeAt(i) - aCharCode]++;
		} else {
			odd1[s1.charCodeAt(i) - aCharCode]++;
			odd2[s2.charCodeAt(i) - aCharCode]++;
		}
	}

	for (let i = 0; i < 26; i++) {
		if (even1[i] != even2[i] || odd1[i] != odd2[i]) {
			return false;
		}
	}

	return true;
};
