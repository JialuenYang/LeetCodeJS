/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
	// Get the correct number of shifts from right to left
	shifts[shifts.length - 1] = shifts[shifts.length - 1] % 26;
	for (let i = shifts.length - 2; i >= 0; i--) {
		shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
	}
	// Shift the letters
	const arr = s.split("");
	const aASCII = "a".charCodeAt(0);
	for (let i = 0; i < arr.length; i++) {
		// If it goes over 'z', then go back to the start
		const newASCII =
			((arr[i].charCodeAt(0) + shifts[i] - aASCII) % 26) + aASCII;
		arr[i] = String.fromCharCode(newASCII);
	}
	return arr.join("");
};
