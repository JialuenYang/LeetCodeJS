/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
	const convertToInts = (str) => {
		const n = str.split("+");
		n[0] = parseInt(n[0]);
		n[1] = parseInt(n[1].substring(0, n[1].length - 1));
		return n;
	};

	const [real1, imag1] = convertToInts(num1);
	const [real2, imag2] = convertToInts(num2);

	const real = real1 * real2 - imag1 * imag2;
	const imag = real1 * imag2 + imag1 * real2;
	return `${real}+${imag}i`;
};
