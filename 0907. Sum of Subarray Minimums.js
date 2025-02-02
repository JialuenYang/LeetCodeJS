/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
	/**
	 * Monotomic stack to keep track of the minimum numbers
	 * Can be further simplified by adding -Infinity to the beginning and end of arr.
	 */
	const mod = 10 ** 9 + 7;
	const stack = [];
	let output = 0;
	for (let i = 0; i < arr.length; i++) {
		while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
			const prevIndex = stack.pop();
			const left =
				stack.length > 0 ? prevIndex - stack[stack.length - 1] : prevIndex + 1;
			const right = i - prevIndex;
			// Left * right because that's how many combinations of subarrays that include this index
			output = (output + arr[prevIndex] * left * right) % mod;
		}
		stack.push(i);
	}

	for (let i = 0; i < stack.length; i++) {
		const index = stack[i];
		const left = i > 0 ? index - stack[i - 1] : index + 1;
		const right = arr.length - index;
		output = (output + arr[index] * left * right) % mod;
	}
	return output;
};
