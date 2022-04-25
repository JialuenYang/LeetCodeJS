/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
	// To maximize our coins, we must always get the second largest pile.
	// Alice will take the highest and Bob will get the smallest 1/3 of piles.
	piles.sort((a, b) => a - b);
	let output = 0;
	// We only need to start from the later 2/3 piles and get every other pile.
	for (let i = piles.length / 3; i < piles.length; i += 2) {
		output += piles[i];
	}
	return output;
};
