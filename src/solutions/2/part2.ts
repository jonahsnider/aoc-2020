import {Lines} from '../../lib/fs';

interface PasswordLineGroups {
	min: string;
	max: string;
	char: string;
	password: string;
}

const lineParts = /(?<min>\d+)-(?<max>\d+)\s(?<char>.): (?<password>.+)/g;

export default function day2part2(input: Lines) {
	let valid = 0;

	for (const line of input) {
		lineParts.lastIndex = 0;
		const matches = lineParts.exec(line);

		if (!matches) {
			throw new TypeError('Input string did not match expected format');
		}

		const {min: minStr, max: maxStr, char: desiredChar, password} = (matches.groups as unknown) as PasswordLineGroups;
		const min = Number(minStr);
		const max = Number(maxStr);

		if ((password[min - 1] === desiredChar) !== (password[max - 1] === desiredChar)) {
			valid++;
		}
	}

	return valid;
}
