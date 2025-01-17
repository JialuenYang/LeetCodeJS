/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
	/**
	 * Use a stack to keep track of the visible indices from right to left.
	 * If a taller index shows up, start popping from stack and count how many were popped.
	 */
	const output = new Array(heights.length).fill(0);
	const stack = [heights.length - 1];
	for (let i = heights.length - 2; i >= 0; i--) {
		let count = 0;
		while (stack.length > 0 && heights[i] > heights[stack[stack.length - 1]]) {
			stack.pop();
			count++;
		}
		if (stack.length == 0) {
			output[i] = count;
		} else {
			output[i] = count + 1;
		}

		stack.push(i);
	}
	return output;
};
