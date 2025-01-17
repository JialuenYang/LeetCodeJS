/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
	// 'a' ASCII decimal is 97. It's already odd.
	return (
		(coordinate1.charCodeAt(0) + parseInt(coordinate1[1])) % 2 ==
		(coordinate2.charCodeAt(0) + parseInt(coordinate2[1])) % 2
	);
};
