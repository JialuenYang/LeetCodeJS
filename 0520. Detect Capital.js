/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	// Check for both lowercase and uppercase letters.
	let hasLowercase = false;
	let hasUppercase = false;
	for (let i = 0; i < word.length; i++) {
		const ascii = word.charCodeAt(i);
		if (97 <= ascii && ascii <= 122) {
			hasLowercase = true;
		}
		if (65 <= ascii && ascii <= 90) {
			hasUppercase = true;
		}
	}

	// If both are present, check if only the first letter is uppercase.
	if (hasLowercase && hasUppercase) {
		const firstCharAscii = word.charCodeAt(0);
		if (65 <= firstCharAscii && firstCharAscii <= 90) {
			for (let i = 1; i < word.length; i++) {
				const ascii = word.charCodeAt(i);
				if (65 <= ascii && ascii <= 90) {
					// First letter is uppercase, but both lowercase and uppercase letters follow.
					return false;
				}
			}
			// Only first letter is uppercase.
			return true;
		}
		// First letter is lowercase and there exists uppercase letters that follow.
		return false;
	}
	// Either all lowercase or all uppercase
	return true;
};
