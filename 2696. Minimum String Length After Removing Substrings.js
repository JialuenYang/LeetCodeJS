/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
	const stack = [];
	for (const c of s) {
		if (stack.length > 0 && stack[stack.length - 1]) {
			if (stack[stack.length - 1] === "A" && c === "B") {
				stack.pop();
			} else if (stack[stack.length - 1] === "C" && c === "D") {
				stack.pop();
			} else {
				stack.push(c);
			}
		} else {
			stack.push(c);
		}
	}
	return stack.length;
};
