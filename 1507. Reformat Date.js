/**
 * @param {string} date
 * @return {string}
 */
const months = new Map();
months.set("Jan", "01");
months.set("Feb", "02");
months.set("Mar", "03");
months.set("Apr", "04");
months.set("May", "05");
months.set("Jun", "06");
months.set("Jul", "07");
months.set("Aug", "08");
months.set("Sep", "09");
months.set("Oct", "10");
months.set("Nov", "11");
months.set("Dec", "12");

var reformatDate = function (date) {
	const arr = date.split(" ");
	// Year is already in the right format.
	const YYYY = arr[2];
	// Month is obtained from mapped out months
	const MM = months.get(arr[1]);
	// Can also map it out but writing it 31 times is too annoying.
	// Simply get rid of the last 2 letters and add a 0 in the beginning if needed.
	const day = arr[0].substring(0, arr[0].length - 2);
	const DD = day.length == 1 ? `0${day}` : day;
	return `${YYYY}-${MM}-${DD}`;
};
