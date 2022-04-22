/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	// Since there's always only 1 letter, we can just add and subtract all the ASCII codes
	let ascii = 0;
	for (let i = 0; i < t.length; i++) {
		ascii += t.charCodeAt(i);
	}
	for (let i = 0; i < s.length; i++) {
		ascii -= s.charCodeAt(i);
	}
	return String.fromCharCode(ascii);
};
