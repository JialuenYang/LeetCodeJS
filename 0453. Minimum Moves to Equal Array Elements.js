/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
	// Not sure how the math works
	let answer = 0;
	let min = Infinity;
	for (const num of nums) {
		min = Math.min(num, min);
		answer += num;
	}
	answer -= min * nums.length;
	return answer;
};
