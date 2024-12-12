/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
	const dp = Array(s.length + 1)
		.fill()
		.map(() => []);
	dp[0].push([]);

	for (let i = 0; i < s.length; i++) {
		if (dp[i].length > 0) {
			for (let j = 0; j < wordDict.length; j++) {
				if (wordDict[j] === s.slice(i, i + wordDict[j].length)) {
					for (let k = 0; k < dp[i].length; k++) {
						dp[i + wordDict[j].length].push([...dp[i][k], j]);
					}
				}
			}
		}
	}

	return dp[dp.length - 1].map((arr) => arr.map((i) => wordDict[i]).join(" "));
};
