/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
	const isLowOdd = low % 2 == 1;
	const isHighOdd = high % 2 == 1;
	// Both are odd
	if (isLowOdd && isHighOdd) {
		return (high - low) / 2 + 1;
	}
	// One is odd
	if ((isLowOdd && !isHighOdd) || (!isLowOdd && isHighOdd)) {
		return (high - low - 1) / 2 + 1;
	}
	// Both are even
	if (!isLowOdd && !isHighOdd) {
		return (high - low) / 2;
	}
};
