/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
	const arr = new Array(encoded.length + 1);
	arr[0] = first;
	for (let i = 0; i < encoded.length; i++) {
		arr[i + 1] = arr[i] ^ encoded[i];
	}
	return arr;
};
