/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
	if (password.length < 8) {
		return false;
	}

	let hasLowercase = false;
	let hasUppercase = false;
	let hasDigit = false;
	const specialChars = "!@#$%^&*()-+";
	let hasSpecialChar = false;

	for (let i = 0; i < password.length; i++) {
		const ascii = password.charCodeAt(i);
		if (97 <= ascii && ascii <= 122) {
			hasLowercase = true;
		}
		if (65 <= ascii && ascii <= 90) {
			hasUppercase = true;
		}
		if (48 <= ascii && ascii <= 57) {
			hasDigit = true;
		}
		if (specialChars.includes(password[i])) {
			hasSpecialChar = true;
		}
		if (i != password.length - 1 && password[i] == password[i + 1]) {
			return false;
		}
	}

	return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
};
