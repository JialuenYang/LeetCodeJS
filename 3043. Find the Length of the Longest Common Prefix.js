/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
	const set = new Set();

	arr1
		.map((num) => num.toString())
		.forEach((num) => {
			for (let i = 1; i <= num.length; i++) {
				set.add(num.slice(0, i));
			}
		});

	let maxLength = 0;

	arr2
		.map((num) => num.toString())
		.forEach((num) => {
			for (let i = 1; i <= num.length; i++) {
				if (set.has(num.slice(0, i))) {
					maxLength = Math.max(maxLength, i);
				}
			}
		});

	return maxLength;
};
