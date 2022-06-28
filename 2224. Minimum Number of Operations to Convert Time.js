/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
	// This is assuming correct will always be greater than current and that you will never need to overflow 23:59 to 00:00.
	const cuArr = current.split(":");
	const coArr = correct.split(":");
	const cuMins = Number(cuArr[0]) * 60 + Number(cuArr[1]);
	const coMins = Number(coArr[0]) * 60 + Number(coArr[1]);
	let diff = coMins - cuMins;
	const m60 = Math.floor(diff / 60);
	diff %= 60;
	const m15 = Math.floor(diff / 15);
	diff %= 15;
	const m5 = Math.floor(diff / 5);
	diff %= 5;
	return m60 + m15 + m5 + diff;
};
