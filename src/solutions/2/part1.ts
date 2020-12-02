import {Lines} from '../../lib/fs';

interface PasswordLineGroups {
	min: string;
	max: string;
	char: string;
	password: string;
}

const lineParts = /(?<min>\d+)-(?<max>\d+)\s(?<char>.): (?<password>.+)/g;

export default function day2part1(input: Lines) {
	let valid = 0;

	for (const line of input) {
		lineParts.lastIndex = 0;
		const matches = lineParts.exec(line);

		if (!matches) {
			throw new TypeError('Input string did not match expected format');
		}

		const {min: minStr, max: maxStr, char: desiredChar, password} = (matches.groups as unknown) as PasswordLineGroups;
		const max = Number(maxStr);

		let occurrences = 0;

		for (let i = 0; i < password.length; i++) {
			const char = password[i];

			if (char === desiredChar) {
				if (++occurrences > max) {
					break;
				}
			}
		}

		const min = Number(minStr);

		if (min <= occurrences && occurrences <= max) {
			valid++;
		}
	}

	return valid;
}
