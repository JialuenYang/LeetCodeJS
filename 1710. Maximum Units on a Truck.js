/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	// There's a better method with O(n) apparently
	boxTypes.sort((a, b) => b[1] - a[1]);
	let output = 0;
	let index = 0;
	while (truckSize > 0 && index < boxTypes.length) {
		if (boxTypes[index][0] > 0) {
			output += boxTypes[index][1];
			boxTypes[index][0]--;
			truckSize--;
		} else {
			index++;
		}
	}
	return output;
};
