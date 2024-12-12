/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let l = 0;
	let r = 0;

	while (l < flowerbed.length) {
		if (flowerbed[l] == 1) {
			l++;
		} else {
			r = l + 1;
			while (r < flowerbed.length && flowerbed[r] == 0) {
				r++;
			}
			const zeroLength = r - l;
			/*
            3 cases:
            1. Entire flowerbed is 0's.
            2. 0's are at the beginning or end. One side has 1's.
            3. 0's are sandwiched between 1's.
            */

			if (l == 0 && r == flowerbed.length) {
				n -= Math.ceil(zeroLength / 2);
			} else if (l == 0 || r == flowerbed.length) {
				n -= Math.floor(zeroLength / 2);
			} else {
				if (zeroLength == 3 || zeroLength == 4) {
					n -= 1;
				} else if (zeroLength >= 5) {
					n -= Math.floor(zeroLength / 2);
				}
			}

			if (n <= 0) {
				return true;
			}
			l = r;
		}
	}

	// In case the whole flowerbed is 1's and n = 0.
	return n <= 0;
};
