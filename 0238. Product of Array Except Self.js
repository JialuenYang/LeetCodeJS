/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	// Multiply numbers on left side in one array and right side in another.
	const pre = Array.from(nums);
	const post = Array.from(nums);

	for (let i = 1; i < pre.length; i++) {
		pre[i] = pre[i - 1] * nums[i];
	}

	for (let i = post.length - 2; i >= 0; i--) {
		post[i] = post[i + 1] * nums[i];
	}

	const output = Array.from(nums);
	output[0] = post[1];
	output[output.length - 1] = pre[pre.length - 2];
	for (let i = 1; i < output.length - 1; i++) {
		output[i] = pre[i - 1] * post[i + 1];
	}
	return output;
};
