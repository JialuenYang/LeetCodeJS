/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	// I went for modifying the array in place.
	let index1 = 0;
	let index2 = nums.length - 1;
	let temp = 0;
	while (index1 < index2) {
		while (nums[index1] % 2 == 0 && index1 < nums.length - 1) {
			index1++;
		}
		while (nums[index2] % 2 == 1 && index2 > 0) {
			index2--;
		}
		// In case there are no odd or even numbers.
		if (index1 > index2) {
			return nums;
		}
		temp = nums[index1];
		nums[index1] = nums[index2];
		nums[index2] = temp;
		index1++;
		index2--;
	}
	return nums;
};
