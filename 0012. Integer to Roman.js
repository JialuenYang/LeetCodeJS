/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const map = new Map();
	map.set(1, "I");
	map.set(5, "V");
	map.set(10, "X");
	map.set(50, "L");
	map.set(100, "C");
	map.set(500, "D");
	map.set(1000, "M");
	map.set(5000, "");

	const arr = [];

	let count = 0;
	while (num > 0) {
		const digit = num % 10;
		const tens = 10 ** count;

		const char1 = map.get(tens);
		const char5 = map.get(5 * tens);

		if (digit == 0) {
		} else if (digit <= 3) {
			arr.unshift(char1.repeat(digit));
		} else if (digit == 4) {
			arr.unshift(char1 + char5);
		} else if (digit <= 8) {
			arr.unshift(char5 + char1.repeat(digit - 5));
		} else if (digit == 9) {
			const char10 = map.get(tens * 10);
			arr.unshift(char1 + char10);
		}

		count += 1;
		num = Math.floor(num / 10);
	}

	return arr.join("");
};
