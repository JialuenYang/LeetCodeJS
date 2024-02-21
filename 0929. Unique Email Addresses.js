/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
	const set = new Set();
	for (const email of emails) {
		const arr = email.split("@");
		const plusIndex = arr[0].indexOf("+");
		if (plusIndex != -1) {
			arr[0] = arr[0].substring(0, plusIndex);
		}
		arr[0] = arr[0].split(".").join("");
		set.add(arr.join("@"));
	}

	return set.size;
};
