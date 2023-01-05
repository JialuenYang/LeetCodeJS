/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
	// Keep track of word count for each sender in a map
	const map = new Map();
	for (let i = 0; i < senders.length; i++) {
		const numberOfWords = messages[i].split(" ").length;
		if (map.has(senders[i])) {
			map.set(senders[i], map.get(senders[i]) + numberOfWords);
		} else {
			map.set(senders[i], numberOfWords);
		}
	}
	// Find largest word count and the sender
	let sender = senders[0];
	let wordCount = 0;
	for (const [key, val] of map) {
		if (val > wordCount) {
			wordCount = val;
			sender = key;
		} else if (val == wordCount) {
			// Same largest word count. Return the lexicographically largest name.
			sender = sender > key ? sender : key;
		}
	}
	return sender;
};
