/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
	let output = 0;
	for (const detail of details) {
		if (detail[11] >= "7" || (detail[11] == "6" && detail[12] >= "1")) {
			output++;
		}
	}
	return output;
};
