/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
	// Math problem
	return (
		10 * (mainTank + Math.min(Math.floor((mainTank - 1) / 4), additionalTank))
	);
};
