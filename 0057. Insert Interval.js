/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	// NeetCode: https://www.youtube.com/watch?v=A8NUOmlwOlM
	const output = [];
	for (const interval of intervals) {
		if (newInterval === null) {
			output.push(interval);
		} else if (newInterval[1] < interval[0]) {
			output.push(newInterval);
			output.push(interval);
			newInterval = null;
		} else if (interval[1] < newInterval[0]) {
			output.push(interval);
		} else {
			// Merge the two intervals
			newInterval = [
				Math.min(interval[0], newInterval[0]),
				Math.max(interval[1], newInterval[1]),
			];
		}
	}

	if (newInterval !== null) {
		output.push(newInterval);
	}
	return output;
};
