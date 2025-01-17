/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
	return `${parseInt(date.substring(0, 4)).toString(2)}-${parseInt(
		date.substring(5, 7)
	).toString(2)}-${parseInt(date.substring(8)).toString(2)}`;
};
