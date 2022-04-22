/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	let str = "1";
	while (n > 1) {
		let newStr = "";

		let i = 0;
		let count = 0;
		let lastNum = str.charAt(0);
		while (i < str.length) {
			if (lastNum != str.charAt(i)) {
				newStr = newStr + String(count) + lastNum;
				lastNum = str.charAt(i);
				count = 1;
			} else {
				count++;
			}
			i++;
		}
		newStr = newStr + String(count) + lastNum;
		str = newStr;
		n--;
	}
	return str;
};
