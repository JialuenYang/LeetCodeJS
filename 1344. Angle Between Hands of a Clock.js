/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
	// Simply find the angles of the hour hand and minute hand and subract them.
	// Remember to mod the hour
	const diff = Math.abs((hour % 12) * 30 + minutes / 2 - minutes * 6);
	return diff > 180 ? 360 - diff : diff;
};
