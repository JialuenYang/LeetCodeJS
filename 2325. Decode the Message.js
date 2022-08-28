/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
	const map = new Map();
	let ASCII = "a".charCodeAt(0);
	for (const c of key) {
		if (!map.has(c) && c !== " ") {
			map.set(c, String.fromCharCode(ASCII));
			ASCII++;
		}
	}
	const output = [];
	for (const c of message) {
		if (c === " ") {
			output.push(c);
		} else {
			output.push(map.get(c));
		}
	}
	return output.join("");
};
