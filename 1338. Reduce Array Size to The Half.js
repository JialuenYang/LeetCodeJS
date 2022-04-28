/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
	// O(n) for both time and space
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
		} else {
			map.set(arr[i], 1);
		}
	}
	// Sorts the frequencies using O(n). Index is frequency. Value is how many times the numbers have this frequency.
	const count = new Array(arr.length + 1).fill(0);
	const freqs = [...map.values()];
	for (const freq of freqs) {
		count[freq]++;
	}
	// Subtract the frequencies until over half the original array is left
	let i = count.length - 1;
	let output = 0;
	let remove = 0;
	while (remove < arr.length / 2) {
		if (count[i] > 0) {
			count[i]--;
			remove += i;
			output++;
		} else {
			i--;
		}
	}
	return output;
};
