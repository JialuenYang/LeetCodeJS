/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}
	}
	const arr = Array.from(Array(s.length + 1), () => new Array());
	for (const [key, value] of map) {
		arr[value].push(key);
	}

	let output = "";
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j < arr[i].length; j++) {
			output += arr[i][j].repeat(i);
		}
	}
	return output;
};
