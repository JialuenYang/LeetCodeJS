/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
	const sArr = s.split("");
	for (let i = 0; i < sArr.length; i++) {
		if (sArr[i] === "?") {
			const leftChar = sArr[i - 1];
			const rightChar = sArr[i + 1];
			if (leftChar !== "a" && rightChar !== "a") {
				sArr[i] = "a";
			} else if (leftChar !== "b" && rightChar !== "b") {
				sArr[i] = "b";
			} else if (leftChar !== "c" && rightChar !== "c") {
				sArr[i] = "c";
			}
		}
	}
	return sArr.join("");
};
