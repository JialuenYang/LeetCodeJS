/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	// A single for loop to sum up all salary, find minimum and maximum salary.
	let salarySum = 0;
	let minSalary = 10 ** 6;
	let maxSalary = 1000;
	for (const s of salary) {
		salarySum += s;
		minSalary = Math.min(minSalary, s);
		maxSalary = Math.max(maxSalary, s);
	}
	return (salarySum - minSalary - maxSalary) / (salary.length - 2);
};
