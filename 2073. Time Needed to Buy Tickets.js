/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
	// Math solution
	// Be careful for k > i
	let output = 0;
	for (let i = 0; i < tickets.length; i++) {
		if (i <= k) {
			output += Math.min(tickets[i], tickets[k]);
		} else {
			output += Math.min(tickets[i], tickets[k] - 1);
		}
	}
	return output;
};
