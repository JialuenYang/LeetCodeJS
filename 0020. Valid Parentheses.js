/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	// Set for open parentheses
	const set = new Set(["(", "[", "{"]);
	// Map for close parentheses
	const map = new Map();
	map.set(")", "(");
	map.set("]", "[");
	map.set("}", "{");

	const stack = [];
	// Loop over the string to push/remove from stack
	for (const c of s) {
		if (set.has(c)) {
			stack.push(c);
		} else if (map.has(c)) {
			if (stack.pop() !== map.get(c)) {
				return false;
			}
		}
	}

	return stack.length == 0;
};
