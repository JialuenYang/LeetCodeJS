/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
	// Split the digits into odd and even, then sort them indivisually.
	const arr = String(num)
		.split("")
		.map((num) => Number(num));
	const odd = [];
	const even = [];
	for (const digit of arr) {
		if (digit % 2 == 0) {
			even.push(digit);
		} else {
			odd.push(digit);
		}
	}
	// Sort from small to big because we are popping them off to put in the answer array
	odd.sort((a, b) => a - b);
	even.sort((a, b) => a - b);

	const answer = [];
	for (const digit of arr) {
		if (digit % 2 == 0) {
			answer.push(even.pop());
		} else {
			answer.push(odd.pop());
		}
	}
	return Number(answer.join(""));
};
