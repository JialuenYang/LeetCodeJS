/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
	const arr = s.split("");
	if (arr[0] === "?" && arr[1] === "?") {
		arr[0] = "1";
		arr[1] = "1";
	} else if (arr[0] === "?") {
		if (arr[1] >= "2") {
			arr[0] = "0";
		} else {
			arr[0] = "1";
		}
	} else if (arr[1] === "?") {
		if (arr[0] === "0") {
			arr[1] = "9";
		} else {
			arr[1] = "1";
		}
	}
	if (arr[3] === "?") {
		arr[3] = "5";
	}
	if (arr[4] === "?") {
		arr[4] = "9";
	}
	return arr.join("");
};
