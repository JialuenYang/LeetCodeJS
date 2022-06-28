/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
	const output = [];
	for (let i = 0; i < s.length; i += k) {
		output.push(s.slice(i, i + k));
	}
	const repeat = s.length % k == 0 ? 0 : k - (s.length % k);
	output[output.length - 1] = output[output.length - 1] + fill.repeat(repeat);
	return output;
};
