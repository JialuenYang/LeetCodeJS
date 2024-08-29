/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	// NeetCode: https://www.youtube.com/watch?v=nONCGxWoUfM
	// Greedy approach. Sort first then if overlap, keep the smaller end.
	intervals.sort((a, b) => a[0] - b[0]);
	let count = 0;
	let temp = intervals[0];
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] < temp[1]) {
			// Has overlap
			count++;
			if (intervals[i][1] <= temp[1]) {
				temp = intervals[i];
			}
		} else {
			temp = intervals[i];
		}
	}
	return count;
};
