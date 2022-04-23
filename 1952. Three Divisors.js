/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
	if (n < 4) {
		return false;
	}
	// Second divisor must be sqrt(n) and sqrt(n) must be a prime in order to be true
	// The problem: Is it worth check sqrt(n) to be a prime? Or is it best to just count all the divisors of n?
	const sqrt = Math.sqrt(n);
	if (Number.isInteger(sqrt) && isPrime(sqrt)) {
		return true;
	}
	return false;
};

const isPrime = (num) => {
	const s = Math.sqrt(num);
	for (let i = 2; i <= s; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return num > 1;
};
