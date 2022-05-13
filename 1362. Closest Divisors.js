/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
	// Simply loop through 1 to sqrt(num+1). Keep replacing divisors with ones that work as we go.
	const num1 = num + 1;
	const num2 = num + 2;
	const sqrt1 = Math.sqrt(num1);
	const sqrt2 = Math.sqrt(num2);
	let index1 = 2;
	let index2 = 2;
	const divisors1 = [1, num1];
	const divisors2 = [1, num2];

	while (index1 <= sqrt1) {
		if (num1 % index1 == 0) {
			divisors1[0] = index1;
			divisors1[1] = num1 / index1;
		}
		index1++;
	}

	while (index2 <= sqrt2) {
		if (num2 % index2 == 0) {
			divisors2[0] = index2;
			divisors2[1] = num2 / index2;
		}
		index2++;
	}

	return divisors1[1] - divisors1[0] <= divisors2[1] - divisors2[0]
		? divisors1
		: divisors2;
};
