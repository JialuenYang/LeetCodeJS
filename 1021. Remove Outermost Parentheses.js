/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
	const answer = [];
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			if (count != 0) {
				answer.push("(");
			}
			count++;
		} else {
			count--;
			if (count != 0) {
				answer.push(")");
			}
		}
	}
	return answer.join("");
};
