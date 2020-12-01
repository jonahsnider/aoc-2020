import {Lines} from '../../lib/fs';

export default function day1part1(input: Lines) {
	const numbers = input.map(string => Number(string));

	for (const i of numbers) {
		for (const j of numbers) {
			if (i + j === 2020) {
				return i * j;
			}
		}
	}
}
