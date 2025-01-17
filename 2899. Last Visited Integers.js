/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
	const seen = [];
	const ans = [];
	let k = 0;
	for (const num of nums) {
		if (num == -1) {
			k++;
			if (k <= seen.length) {
				ans.push(seen[seen.length - k]);
			} else {
				ans.push(-1);
			}
		} else {
			k = 0;
			seen.push(num);
		}
	}
	return ans;
};
