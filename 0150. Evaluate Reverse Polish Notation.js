/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const stack = [];

	let i = 0;
	while (i < tokens.length) {
		stack.push(tokens[i]);

		if (isNaN(tokens[i])) {
			const op = stack.pop();
			const n2 = parseInt(stack.pop());
			const n1 = parseInt(stack.pop());

			let newNum = 0;

			switch (op) {
				case "+":
					newNum = n1 + n2;
					break;
				case "-":
					newNum = n1 - n2;
					break;
				case "*":
					newNum = n1 * n2;
					break;
				case "/":
					// Math.trunc truncates towards zero. It gets rid of all decimals.
					newNum = Math.trunc(n1 / n2);
					break;
			}

			stack.push(newNum);
		}

		i++;
	}

	return stack[0];
};
