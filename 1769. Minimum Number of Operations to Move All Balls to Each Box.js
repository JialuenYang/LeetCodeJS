/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
	// You might be tempted to calculate the number of moves using indices of the balls.
	// But an even simpler method is loop and add the ball count. This will have O(n) time and O(1) space.
	const output = new Array(boxes.length).fill(0);
	// Add from the left.
	let ballsCount = 0;
	let movesCount = 0;
	for (let i = 0; i < boxes.length; i++) {
		movesCount += ballsCount;
		output[i] += movesCount;
		if (boxes[i] === "1") {
			ballsCount++;
		}
	}

	// Add from the right.
	ballsCount = 0;
	movesCount = 0;
	for (let i = boxes.length - 1; i >= 0; i--) {
		movesCount += ballsCount;
		output[i] += movesCount;
		if (boxes[i] === "1") {
			ballsCount++;
		}
	}

	return output;
};
