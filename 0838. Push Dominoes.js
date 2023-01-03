/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
	// Separate simple L, R and the harder problem of pushing towards middle
	const L = [];
	const R = [];
	const mid = [];
	let prev = null;
	let index = 0;
	for (let i = 0; i < dominoes.length; i++) {
		if (dominoes[i] === "L") {
			if (prev === "R") {
				mid.push([index, i]);
				prev = null;
			} else if (prev === "L") {
				L.push(index);
				index = i;
			} else if (prev === null) {
				prev = "L";
				index = i;
			}
		} else if (dominoes[i] === "R") {
			if (prev === "R") {
				R.push(index);
			} else if (prev === "L") {
				L.push(index);
				prev = "R";
			} else if (prev === null) {
				prev = "R";
			}
			index = i;
		}
	}
	if (prev === "R") {
		R.push(index);
	} else if (prev === "L") {
		L.push(index);
	}

	const answer = dominoes.split("");
	for (const start of L) {
		let i = start - 1;
		while (answer[i] === ".") {
			answer[i] = "L";
			i--;
		}
	}
	for (const start of R) {
		let i = start + 1;
		while (answer[i] === ".") {
			answer[i] = "R";
			i++;
		}
	}

	for (const [start, end] of mid) {
		if ((end - start) % 2 == 0) {
			// Middle domino remains standing
			// 3...7
			const endR = (end - start) / 2 - 1 + start;
			for (let i = start + 1; i <= endR; i++) {
				answer[i] = "R";
			}
			for (let i = endR + 2; i <= end; i++) {
				answer[i] = "L";
			}
		} else {
			// No middle domino
			const endR = (end - start - 1) / 2 + start;
			for (let i = start + 1; i <= endR; i++) {
				answer[i] = "R";
			}
			for (let i = endR + 1; i <= end; i++) {
				answer[i] = "L";
			}
		}
	}

	return answer.join("");
};
