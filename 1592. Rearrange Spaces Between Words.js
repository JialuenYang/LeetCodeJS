/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
	const words = text.trim().split(/\s+/);
	let spaces = 0;
	for (const c of text) {
		if (c === " ") {
			spaces++;
		}
	}
	if (words.length == 1) {
		return words[0] + " ".repeat(spaces);
	}

	const inbetween = Math.floor(spaces / (words.length - 1));
	const leftOver = spaces - inbetween * (words.length - 1);

	return words.join(" ".repeat(inbetween)) + " ".repeat(leftOver);
};
