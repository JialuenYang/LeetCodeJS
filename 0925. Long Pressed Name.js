/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let i = 0;
	let j = 0;
	while (i <= name.length && j <= typed.length) {
		if (name[i] === typed[j]) {
			i++;
			j++;
		} else {
			if (name[i - 1] === typed[j]) {
				while (typed[j] === name[i - 1]) {
					j++;
				}
			} else {
				return false;
			}
		}
	}
	return true;
};
