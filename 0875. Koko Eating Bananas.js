/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	// Binary search from 1 to max pile
	let l = 1;
	let r = Math.max(...piles);

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		// Sum up the total number of eating hours
		const k = piles.reduce((acc, cur) => {
			let hours = Math.floor(cur / mid);
			if (cur % mid > 0) {
				hours += 1;
			}
			return acc + hours;
		}, 0);

		if (k > h) {
			// Guard returns before Koko finishes eating
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}

	return l; // Return l, not r. Because the final code that will run will always be r = mid - 1 while l = r.
};
