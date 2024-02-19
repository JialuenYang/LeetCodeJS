/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
	const arr = [];
	for (let i = 1; i <= 9; i++) {
		arr.push(i);
	}
	const set = new Set(arr);

	const removeDigitFromSet = (num) => {
		while (num != 0) {
			if (!set.delete(num % 10)) {
				return false;
			}
			num = Math.floor(num / 10);
		}
		return true;
	};

	if (
		!removeDigitFromSet(n) ||
		!removeDigitFromSet(2 * n) ||
		!removeDigitFromSet(3 * n)
	) {
		return false;
	}

	return set.size == 0;
};
