/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const output = [];
	let temp = intervals[0];
	for (const interval of intervals) {
		if (temp === null) {
			temp = interval;
		} else if (temp[1] < interval[0]) {
			output.push(temp);
			temp = interval;
		} else {
			// Merge two intervals
			temp = [Math.min(temp[0], interval[0]), Math.max(temp[1], interval[1])];
		}
	}
	if (temp !== null) {
		output.push(temp);
	}
	return output;
};
