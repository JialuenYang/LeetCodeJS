/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
	// Check if the sum can be evenly divided into pairs of 2.
	let sum = 0;
	for (const s of skill) {
		sum += s;
	}
	if (sum % (skill.length / 2) != 0) {
		return -1;
	}

	// Find the sum of product
	let answer = 0;
	const teamSkill = sum / (skill.length / 2);
	skill.sort((a, b) => a - b);
	const halfway = skill.length / 2;
	for (let i = 0; i < halfway; i++) {
		// Check if sum of any pair has the correct sum
		if (skill[i] + skill[skill.length - 1 - i] != teamSkill) {
			return -1;
		}
		answer += skill[i] * skill[skill.length - 1 - i];
	}
	return answer;
};
