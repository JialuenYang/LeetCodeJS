/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const ransomAlpha = new Array(26).fill(0);
	const magazineAlpha = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	for (const c of ransomNote) {
		ransomAlpha[c.charCodeAt(0) - aASCII]++;
	}
	for (const c of magazine) {
		magazineAlpha[c.charCodeAt(0) - aASCII]++;
	}
	for (let i = 0; i < 26; i++) {
		if (ransomAlpha[i] > magazineAlpha[i]) {
			return false;
		}
	}
	return true;
};
