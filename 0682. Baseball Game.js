/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
	const nums = [];
	for (const op of ops) {
		if (op === "+") {
			nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
		} else if (op === "D") {
			nums.push(nums[nums.length - 1] * 2);
		} else if (op === "C") {
			nums.pop();
		} else {
			nums.push(parseInt(op));
		}
	}

	return nums.reduce((acc, cur) => acc + cur, 0);
};
