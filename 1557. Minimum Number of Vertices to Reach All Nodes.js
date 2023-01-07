/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
	// Create a set to store all 'from' nodes
	const set = new Set(edges.map((edge) => edge[0]));
	// Remove all 'to' nodes in set
	for (const edge of edges) {
		set.delete(edge[1]);
	}
	return [...set];
};
