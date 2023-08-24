/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	// Sort intervals by increasing start time. Then just compare the solution end time and interval start time to merge.

	intervals = intervals.sort((a, b) => a[0] - b[0]);
	const solution = [];
	solution.push(intervals[0]);
	for (const interval of intervals) {
		if (interval[0] <= solution[solution.length - 1][1]) {
			solution[solution.length - 1][1] = Math.max(
				interval[1],
				solution[solution.length - 1][1]
			);
		} else {
			solution.push(interval);
		}
	}
	return solution;
};
