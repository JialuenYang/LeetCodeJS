/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
	// Map for dynamic programming
	const map = new Map();
	map.set(1, 0);
	map.set(2, 1);
	// Map for lo to hi keys and values
	const map2 = new Map();
	for (let i = lo; i <= hi; i++) {
		const arr = [];
		let temp = i;
		while (!map.has(temp)) {
			arr.push(temp);
			if (temp % 2 == 0) {
				temp /= 2;
			} else {
				temp = 3 * temp + 1;
			}
		}
		// Dynamic programming to keep track of calculated keys
		for (let j = arr.length - 1; j >= 0; j--) {
			map.set(arr[j], map.get(temp) + arr.length - j);
		}
		map2.set(i, map.get(i));
	}
	// Sorts value from small to large. If equal, sort key from small to large.
	const mapSort = new Map(
		[...map2.entries()].sort((a, b) => {
			if (a[1] - b[1] == 0) {
				return a[0] - b[0];
			} else {
				return a[1] - b[1];
			}
		})
	);
	let index = 0;
	for (const [key, value] of mapSort) {
		if (index == k - 1) {
			return key;
		}
		index++;
	}
};
