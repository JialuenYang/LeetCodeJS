/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	const shiftFromIndex = (index) => {
		for (let i = arr.length - 1; i > index; i--) {
			arr[i] = arr[i - 1];
		}
		arr[index] = 0;
	};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			shiftFromIndex(i);
			i++;
		}
	}
};
