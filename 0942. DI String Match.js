/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
	let left = 0;
	let right = s.length;
	const output = [];
	for (const c of s) {
		if (c === "I") {
			output.push(left);
			left++;
		} else {
			output.push(right);
			right--;
		}
	}
	output.push(right);
	return output;
};
