/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	// Check this guy's graph: https://leetcode.com/problems/subsets/solutions/27281/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partitioning/comments/26331
	const output = [];

	const recursion = (arr, index) => {
		output.push(arr);
		for (let i = index; i < nums.length; i++) {
			const newArr = Array.from(arr);
			newArr.push(nums[i]);
			recursion(newArr, i + 1);
		}
	};
	recursion([], 0);
	return output;
};
