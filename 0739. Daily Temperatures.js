/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const output = new Array(temperatures.length);
	const stack = []; // Stack of temperatures indices

	for (let i = temperatures.length - 1; i >= 0; i--) {
		// Pop all lower temps
		while (
			stack.length > 0 &&
			temperatures[stack[stack.length - 1]] <= temperatures[i]
		) {
			stack.pop();
		}

		// Check if stack is empty and record distance
		if (stack.length == 0) {
			output[i] = 0;
		} else {
			output[i] = stack[stack.length - 1] - i;
		}

		// Push current temp's index
		stack.push(i);
	}

	return output;
};
