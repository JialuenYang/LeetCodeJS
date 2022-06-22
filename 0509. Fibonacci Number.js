const f = [0, 1];
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	for (let i = f.length; i <= n; i++) {
		f.push(f[i - 1] + f[i - 2]);
	}
	return f[n];
};
