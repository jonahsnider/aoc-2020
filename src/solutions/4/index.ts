import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

namespace Passport {
	export enum Field {
		BirthYear = 'byr',
		IssueYear = 'iyr',
		ExpirationYear = 'eyr',
		Height = 'hgt',
		HairColor = 'hcl',
		EyeColor = 'ecl',
		PassportID = 'pid',
		CountryID = 'cid'
	}

	export enum EyeColor {
		Amber = 'amb',
		Blue = 'blu',
		Brown = 'brn',
		Grey = 'gry',
		Green = 'grn',
		Hazel = 'hzl',
		Other = 'oth'
	}
}

type BitField = number;

const fieldBitfield: Record<Passport.Field, BitField> = {
	[Passport.Field.BirthYear]: Math.trunc(1),
	[Passport.Field.IssueYear]: 1 << 1,
	[Passport.Field.ExpirationYear]: 1 << 2,
	[Passport.Field.Height]: 1 << 3,
	[Passport.Field.HairColor]: 1 << 4,
	[Passport.Field.EyeColor]: 1 << 5,
	[Passport.Field.PassportID]: 1 << 6,
	[Passport.Field.CountryID]: 1 << 7
};

const requiredFieldsBitfield: BitField =
	fieldBitfield[Passport.Field.BirthYear] |
	fieldBitfield[Passport.Field.IssueYear] |
	fieldBitfield[Passport.Field.ExpirationYear] |
	fieldBitfield[Passport.Field.Height] |
	fieldBitfield[Passport.Field.HairColor] |
	fieldBitfield[Passport.Field.EyeColor] |
	fieldBitfield[Passport.Field.PassportID];

const validEyeColors: Set<Passport.EyeColor> = new Set([
	Passport.EyeColor.Amber,
	Passport.EyeColor.Blue,
	Passport.EyeColor.Brown,
	Passport.EyeColor.Grey,
	Passport.EyeColor.Green,
	Passport.EyeColor.Hazel,
	Passport.EyeColor.Other
]);

export default function day4(rows: Lines): SolutionPair {
	// Default line splitter doesn't work great with this
	const passportStrings = rows
		.join('\n')
		.split('\n\n')
		.map(string => string.replace(/\n/g, ' '));

	const solution: SolutionPair = [0, 0];

	passportLoop: for (const passportString of passportStrings) {
		const fields: Map<Passport.Field, string> = new Map();
		let presentFieldsBitfield: BitField = 0;
		const segments = passportString.split(' ').map(segment => segment.split(':'));

		for (const segment of segments) {
			const [key, value] = segment;

			presentFieldsBitfield |= fieldBitfield[key as Passport.Field];

			fields.set(key as Passport.Field, value);
		}

		if ((requiredFieldsBitfield & presentFieldsBitfield) === requiredFieldsBitfield) {
			solution[0]++;

			for (const [field, value] of fields) {
				switch (field) {
					case Passport.Field.BirthYear:
						if (value.length === 4) {
							const birthYear = Number(value);

							if (birthYear >= 1920 && birthYear <= 2002) {
								break;
							}
						}

						continue passportLoop;
					case Passport.Field.IssueYear:
						if (value.length === 4) {
							const issueYear = Number(value);

							if (issueYear >= 2010 && issueYear <= 2020) {
								break;
							}
						}

						continue passportLoop;
					case Passport.Field.ExpirationYear:
						if (value.length === 4) {
							const expirationYear = Number(value);

							if (expirationYear >= 2020 && expirationYear <= 2030) {
								break;
							}
						}

						continue passportLoop;
					case Passport.Field.Height:
						const height = Number(value.slice(0, -2));
						if ((value.endsWith('cm') && height >= 150 && height <= 193) || (height >= 59 && height <= 76)) {
							break;
						}

						continue passportLoop;
					case Passport.Field.HairColor:
						if (/^#[\da-f]{6}$/.test(value)) {
							break;
						}

						continue passportLoop;
					case Passport.Field.EyeColor:
						if (validEyeColors.has(value as Passport.EyeColor)) {
							break;
						}

						continue passportLoop;
					case Passport.Field.PassportID:
						if (/^\d{9}$/.test(value)) {
							break;
						}

						continue passportLoop;
				}
			}
		}

		solution[1]++;
	}

	return solution;
}
