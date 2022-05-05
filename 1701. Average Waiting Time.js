/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
	// The key is calculating when the chef will be free, which is the larger of when the customer just arrived or the chef finishes all previous orders.
	let totalTime = 0;
	let freeToCook = customers[0][0];
	for (const customer of customers) {
		freeToCook = Math.max(freeToCook, customer[0]);
		freeToCook += customer[1];
		totalTime += freeToCook - customer[0];
	}
	return totalTime / customers.length;
};
