/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
	// Convert to string then to array
	const arr = Array.from(num.toString()).map(Number);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 6) {
			arr[i] = 9;
			break;
		}
	}
	return parseInt(arr.join(""));
};
