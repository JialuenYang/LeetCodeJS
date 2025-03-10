/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	/**
	 * Time complexity: O(n + m)
	 * Space complexity: O(1) if not including output
	 */
	const output = [];
	let i = 0;
	let j = 0;
	while (i < firstList.length && j < secondList.length) {
		const start = Math.max(firstList[i][0], secondList[j][0]);
		const end = Math.min(firstList[i][1], secondList[j][1]);
		if (start <= end) {
			output.push([start, end]);
		}

		if (firstList[i][1] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}
	}

	return output;
};
