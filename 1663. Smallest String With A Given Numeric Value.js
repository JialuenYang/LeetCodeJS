/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
	/**
	 * Be careful and use 25 because replacing 'a' with 'z' nets you +25.
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	const arr = new Array(n).fill("a");
	let i = arr.length - 1;
	let diff = k - n;
	while (diff > 0) {
		if (diff <= 25) {
			arr[i] = String.fromCharCode(diff + 97);
			break;
		}
		arr[i] = "z";
		i--;
		diff -= 25;
	}

	return arr.join("");
};
