import {Lines} from '../../lib/fs';

export default function day1part2(input: Lines) {
	const numbers = input.map(string => Number(string));

	for (const i of numbers) {
		for (const j of numbers) {
			for (const k of numbers) {
				// Triple nested for loop is a good sign

				if (i + j + k === 2020) {
					return i * j * k;
				}
			}
		}
	}
}
