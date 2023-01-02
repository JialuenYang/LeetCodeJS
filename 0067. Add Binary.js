/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	const maxLength = Math.max(a.length, b.length);
	// Reverse the strings so we can add from left to right
	a = a.split("").reverse().join("");
	b = b.split("").reverse().join("");
	const answer = [];
	let carry = 0;
	for (let i = 0; i < maxLength; i++) {
		let aBinary;
		let bBinary;

		// We add leading zeroes to shorter strings
		if (i > a.length - 1) {
			aBinary = 0;
		} else {
			aBinary = Number(a[i]);
		}

		if (i > b.length - 1) {
			bBinary = 0;
		} else {
			bBinary = Number(b[i]);
		}

		const sum = aBinary + bBinary + carry;
		if (sum == 0) {
			answer.push("0");
			carry = 0;
		} else if (sum == 1) {
			answer.push("1");
			carry = 0;
		} else if (sum == 2) {
			answer.push("0");
			carry = 1;
		} else if (sum == 3) {
			answer.push("1");
			carry = 1;
		}
	}
	// Final carry
	if (carry == 1) {
		answer.push("1");
	}
	return answer.reverse().join("");
};
