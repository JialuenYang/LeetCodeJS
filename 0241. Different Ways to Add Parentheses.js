/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
	/**
	 * Time complexity: O(n*2^n) ????
	 * Space complexity: O(2^n) ????
	 */
	if (!isNaN(expression)) {
		return [parseInt(expression)];
	}

	const arr = [];
	for (let i = 0; i < expression.length; i++) {
		if (isNaN(expression[i])) {
			const left = diffWaysToCompute(expression.substring(0, i));
			const right = diffWaysToCompute(expression.substring(i + 1));
			for (const leftNum of left) {
				for (const rightNum of right) {
					switch (expression[i]) {
						case "+":
							arr.push(leftNum + rightNum);
							break;
						case "-":
							arr.push(leftNum - rightNum);
							break;
						case "*":
							arr.push(leftNum * rightNum);
							break;
					}
				}
			}
		}
	}
	return arr;
};
