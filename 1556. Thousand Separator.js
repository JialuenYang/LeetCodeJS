// Method 1: Convert int to string and then substring to array then join the array with "."
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	const s = n.toString();
	const remainder = s.length % 3;
	const output = remainder == 0 ? [] : [s.substring(0, remainder)];
	for (let i = remainder; i < s.length; i += 3) {
		output.push(s.substring(i, i + 3));
	}
	return output.join(".");
};

// Method 2: Convert each digit to string
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	if (n <= 999) {
		return n.toString();
	}
	const arr = [];
	let count = 0;
	while (n > 0) {
		arr.push((n % 10).toString());
		n = Math.floor(n / 10);
		count++;
		if (count == 3) {
			arr.push(".");
			count = 0;
		}
	}
	if (arr[arr.length - 1] == ".") {
		arr.pop();
	}
	return arr.reverse().join("");
};
