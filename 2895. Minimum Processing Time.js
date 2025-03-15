/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
	/**
	 * Time complexity: O(n*log(n) + m*log(m))
	 * Space complexity: O(1)
	 */
	processorTime.sort((a, b) => a - b);
	tasks.sort((a, b) => b - a);

	let minTime = 0;
	for (let i = 0; i < processorTime.length; i++) {
		// No need to check each of the 4 tasks since it's already sorted. Just get the first value.
		minTime = Math.max(minTime, processorTime[i] + tasks[4 * i]);
	}
	return minTime;
};
