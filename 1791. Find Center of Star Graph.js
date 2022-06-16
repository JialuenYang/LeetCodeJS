/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
	// You only need to look at the first two edges.
	// The following line of code is really just asking if edge[0][0] is also in edge[1]. If yes, return edge[0][0]. If not, return edge[0][1].
	return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]
		? edges[0][0]
		: edges[0][1];
};
