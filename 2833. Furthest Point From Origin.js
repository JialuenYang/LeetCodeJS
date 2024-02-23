/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
	let LCount = 0;
	let RCount = 0;
	let _Count = 0;
	for (const move of moves) {
		if (move === "L") {
			LCount++;
		} else if (move === "R") {
			RCount++;
		} else {
			_Count++;
		}
	}

	return Math.max(
		Math.abs(-LCount + RCount + _Count),
		Math.abs(-LCount + RCount - _Count)
	);
};
