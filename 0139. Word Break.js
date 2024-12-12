/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	// Can simplify to just for loop each char of s and for loop wordDict using DP.

	const isMatch = (index, word) => {
		if (s.length - index < word.length) {
			return false;
		}
		for (let i = 0; i < word.length; i++) {
			if (s[index + i] !== word[i]) {
				return false;
			}
		}
		return true;
	};

	const dp = new Array(s.length).fill(false);
	const stack = [0];
	while (stack.length > 0) {
		const start = stack.pop();
		if (dp[start]) {
			continue;
		}
		dp[start] = true;

		for (word of wordDict) {
			if (dp[start + word.length]) {
				continue;
			}
			if (isMatch(start, word)) {
				if (start + word.length === s.length) {
					return true;
				}
				stack.push(start + word.length);
			}
		}
	}

	return false;
};
