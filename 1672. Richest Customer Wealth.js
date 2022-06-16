/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let richest = 0;
	for (let i = 0; i < accounts.length; i++) {
		let totalWealth = 0;
		for (let j = 0; j < accounts[0].length; j++) {
			totalWealth += accounts[i][j];
		}
		richest = Math.max(richest, totalWealth);
	}
	return richest;
};
