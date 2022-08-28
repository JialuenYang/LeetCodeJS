/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
	let output = 0;
	const num = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
	for (const item of items) {
		if (item[num] === ruleValue) {
			output++;
		}
	}
	return output;
};
