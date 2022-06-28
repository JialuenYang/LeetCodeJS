/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
	let money = 0;
	const fullWeeks = Math.floor(n / 7);
	n %= 7;
	money += ((1 + n) * n) / 2;
	money += n * fullWeeks;
	money += fullWeeks * 28;
	money += ((fullWeeks * (fullWeeks - 1)) / 2) * 7;
	return money;
};
