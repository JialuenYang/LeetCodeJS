/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n) on stack due to recursion
	 */
	const freq = new Array(26).fill(0);

	for (const c of tiles) {
		freq[c.charCodeAt(0) - "A".charCodeAt(0)]++;
	}

	let output = 0;
	const recursion = (freq) => {
		for (let i = 0; i < 26; i++) {
			if (freq[i] > 0) {
				freq[i]--;
				output++;
				// Do the recursion with modified array
				recursion(freq);
				// Set the array back to normal after recursion finishes
				freq[i]++;
			}
		}
	};
	recursion(freq);

	return output;
};
