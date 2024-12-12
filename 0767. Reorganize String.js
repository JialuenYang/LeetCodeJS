/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
	// Save frequency of each letter
	const map = new Map();
	let key = s[0];
	let maxCount = 0;
	for (const c of s) {
		if (map.has(c)) {
			map.set(c, map.get(c) + 1);
		} else {
			map.set(c, 1);
		}
		if (map.get(c) > maxCount) {
			key = c;
			maxCount = map.get(c);
		}
	}

	// Check if adjacent letters are always different.
	if (s.length % 2 == 0) {
		if (maxCount > s.length / 2) {
			return "";
		}
	} else {
		if (maxCount > Math.ceil(s.length / 2)) {
			return "";
		}
	}

	const arr = new Array(s.length);
	let index = 0;

	// Highest frequency letter gets put first.
	for (let i = 0; i < map.get(key); i++) {
		arr[index] = key;
		index += 2;
		if (index >= s.length) {
			index = 1;
		}
	}

	map.delete(key);

	// Put the rest of the letters in.
	for (const [key, val] of map) {
		for (let i = 0; i < val; i++) {
			arr[index] = key;
			index += 2;
			if (index >= s.length) {
				index = 1;
			}
		}
	}

	return arr.join("");
};
