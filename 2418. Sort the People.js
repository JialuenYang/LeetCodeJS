/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
	// Create keys from the source array.
	const indices = Array.from(heights.keys());
	// Create indices for sorting the source array.
	indices.sort((a, b) => heights[b] - heights[a]);

	// Map the indices of the source array to the target array, which makes target array sorted the way source array is sorted.
	const sortedNames = indices.map((i) => names[i]);
	return sortedNames;
};
