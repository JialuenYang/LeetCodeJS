/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
	/**
	 * Don't trust the description. It was written in a very confusing way.
	 * The time value isn't when the buttons are pressed, but when they are released.
	 */
	let [index, time] = events[0];
	for (let i = 1; i < events.length; i++) {
		const diff = events[i][1] - events[i - 1][1];
		if (diff > time) {
			time = diff;
			index = events[i][0];
		} else if (diff == time) {
			index = Math.min(index, events[i][0]);
		}
	}
	return index;
};
