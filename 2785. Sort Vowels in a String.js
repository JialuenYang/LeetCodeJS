/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
	const vowels = [];
	const sArr = s.split("");
	for (let i = 0; i < sArr.length; i++) {
		const cUpperCase = sArr[i].toUpperCase();
		if (
			cUpperCase === "A" ||
			cUpperCase === "E" ||
			cUpperCase === "I" ||
			cUpperCase === "O" ||
			cUpperCase === "U"
		) {
			vowels.push(sArr[i]);
			sArr[i] = "0";
		}
	}

	vowels.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

	for (let i = 0; i < sArr.length; i++) {
		if (sArr[i] === "0") {
			sArr[i] = vowels.pop();
		}
	}

	return sArr.join("");
};
