/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows == 1) {
		return s;
	}

	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push([]);
	}

	let row = 0;
	let goDown = true;
	for (let i = 0; i < s.length; i++) {
		rows[row].push(s[i]);

		if (goDown && row == numRows - 1) {
			goDown = false;
		} else if (!goDown && row == 0) {
			goDown = true;
		}

		if (goDown) {
			row++;
		} else {
			row--;
		}
	}

	for (let i = 0; i < numRows; i++) {
		rows[i] = rows[i].join("");
	}
	return rows.join("");
};
