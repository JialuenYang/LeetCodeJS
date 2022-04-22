/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle === "") return 0;

	let id = 0;
	while (id < haystack.length - needle.length + 1) {
		let id2 = 0;
		while (haystack.charAt(id + id2) === needle.charAt(id2)) {
			if (id2 == needle.length - 1) {
				return id;
			}
			id2++;
		}
		id++;
	}

	return -1;
};
