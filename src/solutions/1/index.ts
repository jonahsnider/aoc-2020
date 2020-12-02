import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

export default function day1(input: Lines): SolutionPair {
	const solutionPair: SolutionPair = [0, 0];

	const numbers = input.map(string => Number(string));

	numbers.sort((a, b) => a - b);

	for (const a of numbers) {
		for (const b of numbers) {
			if (a + b === 2020) {
				solutionPair[0] = a * b;

				if (solutionPair[1] !== 0) {
					return solutionPair;
				}
			}

			for (const c of numbers) {
				if (a + b + c === 2020) {
					solutionPair[1] = a * b * c;

					if (solutionPair[0] !== 0) {
						return solutionPair;
					}
				}
			}
		}
	}

	return solutionPair;
}
