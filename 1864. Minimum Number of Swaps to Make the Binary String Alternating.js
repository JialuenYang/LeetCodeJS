/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
	/*
    Step 1: Check if it's possible to make string alternating
    Step 2: Find whether the first number should be 0 or 1
            In the case of odd length string, the higher count wins.
            In the case of even length string, we need to count how many numbers are already in the correct positions. 
    Step 3: Count how many numbers are in the wrong positions. Return half of that value since every swap fixes 2 wrong positions. 
    */

	// Check if it's possible to make string alternating
	let diff = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "0") {
			diff++;
		} else {
			diff--;
		}
	}

	if (Math.abs(diff) > 1) {
		return -1;
	}

	// Find whether the first number should be 0 or 1 in the case of even length string
	let even0 = 0;
	let even1 = 0;
	for (let i = 0; i < s.length; i += 2) {
		if (s[i] === "0") {
			even0++;
		} else {
			even1++;
		}
	}

	const startWithZero = s.length % 2 == 0 ? even0 >= even1 : diff == 1;

	let wrongCount = 0;
	const evenNum = startWithZero ? "0" : "1";
	const oddNum = startWithZero ? "1" : "0";

	for (let i = 0; i < s.length; i += 2) {
		if (s[i] !== evenNum) {
			wrongCount++;
		}
	}
	for (let i = 1; i < s.length; i += 2) {
		if (s[i] !== oddNum) {
			wrongCount++;
		}
	}

	// Each swap fixes 2 wrong numbers so return wrong count divided by 2
	return wrongCount / 2;
};
