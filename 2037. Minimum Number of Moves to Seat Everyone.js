/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
	// Sorting would help bring the starting points closer to the targets.
	seats.sort((a, b) => a - b);
	students.sort((a, b) => a - b);
	let output = 0;
	for (let i = 0; i < seats.length; i++) {
		output += Math.abs(seats[i] - students[i]);
	}
	return output;
};
