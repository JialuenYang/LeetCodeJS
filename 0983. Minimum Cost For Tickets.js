/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
	/**
	 * Dynamic programming problem. Need to check 1 day ago, 7 days ago, 30 days ago.
	 * Time complexity: O(365) -> O(1)
	 * Space complexity: O(365) -> O(1)
	 */
	const dp = new Array(days.at(-1) + 1).fill(0);

	let j = 0;
	for (let i = 1; i < dp.length; i++) {
		if (days[j] == i) {
			dp[i] = Math.min(
				dp[i - 1] + costs[0],
				(dp[i - 7] ?? 0) + costs[1],
				(dp[i - 30] ?? 0) + costs[2]
			);
			j++;
		} else {
			dp[i] = dp[i - 1];
		}
	}
	return dp.at(-1);
};
