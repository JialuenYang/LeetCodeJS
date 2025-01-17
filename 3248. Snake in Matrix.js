/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
	// Constraint says that the snake will not move outside of the boundaries so we are safe to just add or subtract.
	let position = 0;
	for (const c of commands) {
		switch (c) {
			case "LEFT":
				position -= 1;
				break;
			case "RIGHT":
				position += 1;
				break;
			case "UP":
				position -= n;
				break;
			case "DOWN":
				position += n;
				break;
		}
	}
	return position;
};
