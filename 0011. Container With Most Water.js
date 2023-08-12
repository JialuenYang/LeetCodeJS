/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	/* 
    Have two indices. One at the far left, another at the far right.
    Compare max water. Keep moving the indices closer to each other. 
    Move the shorter height one. 
    */

	let leftIndex = 0;
	let rightIndex = height.length - 1;
	let bottomDistance = rightIndex;

	let maxWater = 0;
	while (leftIndex < rightIndex) {
		const leftHeight = height[leftIndex];
		const rightHeight = height[rightIndex];

		maxWater = Math.max(
			maxWater,
			bottomDistance * Math.min(leftHeight, rightHeight)
		);

		if (leftHeight < rightHeight) {
			leftIndex++;
		} else {
			rightIndex--;
		}

		bottomDistance--;
	}

	return maxWater;
};
