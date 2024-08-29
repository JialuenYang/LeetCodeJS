/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	// NeedCode: https://www.youtube.com/watch?v=zx5Sw9130L0
	let maxSize = 0;
	const stack = [];
	for (let i = 0; i < heights.length; i++) {
		let popped = null;
		while (stack.length && stack[stack.length - 1].height >= heights[i]) {
			popped = stack.pop();
			maxSize = Math.max(maxSize, (i - popped.index) * popped.height);
		}

		if (popped === null) {
			stack.push({ index: i, height: heights[i] });
		} else {
			stack.push({ index: popped.index, height: heights[i] });
		}
	}

	for (const e of stack) {
		maxSize = Math.max(maxSize, (heights.length - e.index) * e.height);
	}

	return maxSize;
};
