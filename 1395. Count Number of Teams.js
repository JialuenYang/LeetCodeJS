/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
	// Reference is middle number, because it's easier that way. You only have to keep track of left and right.
	let output = 0;
	for (let i = 1; i < rating.length - 1; i++) {
		let left = 0;
		let right = 0;
		for (let j = 0; j < i; j++) {
			if (rating[j] < rating[i]) {
				left++;
			}
		}
		for (let k = rating.length - 1; k > i; k--) {
			if (rating[i] < rating[k]) {
				right++;
			}
		}
		// Remember that both increasing and decreasing numbers are accepted, so you need to calculate for the other direction.
		output += left * right + (i - left) * (rating.length - 1 - i - right);
	}

	return output;
};
