/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
	const set = new Set(nums);
	for (const num of nums) {
		set.add(parseInt(num.toString().split("").reverse().join("")));
	}
	return set.size;
};
