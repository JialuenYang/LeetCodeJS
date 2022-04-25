/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
	// Use a stack to keep track of all the incomplete paranthesis
	const stack = [];
	for (const c of s) {
		if (stack.length > 0 && c === ")" && stack[stack.length - 1] === "(") {
			stack.pop();
		} else {
			stack.push(c);
		}
	}
	return stack.length;
};
