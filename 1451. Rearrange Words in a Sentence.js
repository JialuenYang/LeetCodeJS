/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
	text = text.toLowerCase();
	const arr = text.split(" ");
	arr.sort((a, b) => a.length - b.length);
	text = arr.join(" ");
	// Remember that you can't just modify a char in place in JavaScript.
	text = text.charAt(0).toUpperCase() + text.slice(1);
	return text;
};
