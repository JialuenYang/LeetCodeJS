/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
	// How much time it takes to reach target sorted by how close each starting position is to target
	const time = position
		.map((value, index) => ({
			position: value,
			time: (target - value) / speed[index],
		}))
		.sort((a, b) => a.position - b.position)
		.map((e) => e.time);

	const stack = [];
	for (let i = 0; i < time.length; i++) {
		// Remove all cars that are farther away from target and take less time than the current car
		while (stack.length > 0 && stack[stack.length - 1] <= time[i]) {
			stack.pop();
		}
		stack.push(time[i]);
	}

	return stack.length;
};
