/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
	horizontalCuts.sort((a, b) => a - b);
	verticalCuts.sort((a, b) => a - b);
	horizontalCuts.push(h);
	verticalCuts.push(w);

	let maxH = horizontalCuts[0];
	let maxV = verticalCuts[0];
	for (let i = 0; i < horizontalCuts.length - 1; i++) {
		maxH = Math.max(maxH, horizontalCuts[i + 1] - horizontalCuts[i]);
	}
	for (let i = 0; i < verticalCuts.length - 1; i++) {
		maxV = Math.max(maxV, verticalCuts[i + 1] - verticalCuts[i]);
	}

	return (BigInt(maxH) * BigInt(maxV)) % BigInt(1e9 + 7);
};
