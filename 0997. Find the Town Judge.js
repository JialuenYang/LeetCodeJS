// Method 1: Pretty much worst case
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	const people = [...Array(n)].map(() => new Set());
	const people2 = [...Array(n)].map(() => new Array());
	for (const t of trust) {
		people[t[1] - 1].add(t[0]);
		people2[t[0] - 1].push(t[1]);
	}
	for (let i = 0; i < people.length; i++) {
		if (people[i].size == n - 1 && people2[i].length == 0) {
			return i + 1;
		}
	}
	return -1;
};

// Method 2: Simply loop through trust to eliminate people.
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	const set = new Set();
	for (let i = 1; i <= n; i++) {
		set.add(i);
	}
	// Judge trusts no one, so remove all people who trust.
	for (const t of trust) {
		set.delete(t[0]);
	}
	if (set.size != 1) {
		return -1;
	}
	// Assume judge is real, count the number of people who trust judge. Should be n-1 if judge is real.
	const judge = [...set][0];
	let peopleWhoTrustJudge = 0;
	for (const t of trust) {
		if (t[1] == judge) {
			peopleWhoTrustJudge++;
		}
	}
	if (peopleWhoTrustJudge == n - 1) {
		return judge;
	}
	return -1;
};
