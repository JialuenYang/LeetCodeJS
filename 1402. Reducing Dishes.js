/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
	/*
    Sort first. n*log(n)
    If final element is negative, return 0.
    Then calculate total sum of all elements.
    Each time we remove the smallest element, we update the sum. 
    No need to recalculate the total answer every time. 
    Time complexity: n*log(n) + n -> O(n*log(n))
    */

	satisfaction.sort((a, b) => a - b);
	if (satisfaction[satisfaction.length - 1] < 0) {
		return 0;
	}

	let sum = satisfaction.reduce((acc, val) => acc + val);
	let maxScore = satisfaction.reduce((acc, val, idx) => acc + val * (idx + 1));
	let init = maxScore;

	while (satisfaction.length > 1 && satisfaction[0] < 0) {
		const removed = satisfaction.shift();
		init = init - sum;
		sum -= removed;
		maxScore = Math.max(maxScore, init);
	}
	return maxScore;
};
