/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	// Note: Must make one and only one swap.
	// Need to check string lengths, multiple of the same char, and different chars indices.
	if (s.length != goal.length) {
		return false;
	}

	const map = new Map();
	let hasMultipleSameChar = false;
	const indices = [];
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
			if (map.get(s[i]) >= 2) {
				hasMultipleSameChar = true;
			}
		} else {
			map.set(s[i], 1);
		}

		if (s[i] !== goal[i]) {
			if (indices.length == 2) {
				return false;
			}
			indices.push(i);
		}
	}

	if (indices.length == 0) {
		if (hasMultipleSameChar) {
			return true;
		}
		return false;
	} else if (indices.length == 2) {
		if (
			s[indices[0]] === goal[indices[1]] &&
			s[indices[1]] == goal[indices[0]]
		) {
			return true;
		}
	}

	return false;
};
