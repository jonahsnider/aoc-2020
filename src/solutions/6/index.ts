import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

/**
 * Find the intersection of 2 sets.
 * Note that this iterates over `a`, and not the smallest `Set` provided, so this will return an incorrect value if you don't supply parameters in the correct
 * order.
 *
 * @param a - First set
 * @param b - Second set
 *
 * @returns A new `Set` of all the elements from `a` that are in `b`
 */
function calculateIntersection<T>(a: Set<T>, b: Set<T>): Set<T> {
	const result: Set<T> = new Set();

	for (const element of a) {
		if (b.has(element)) {
			result.add(element);
		}
	}

	return result;
}

export default function day6(rows: Lines): SolutionPair {
	// Default line splitter doesn't work great with this
	const allAnswers = rows
		.join('\n')
		.split('\n\n')
		.map(string => string.split(/\n/g));

	const solution: SolutionPair = [0, 0];

	for (const people of allAnswers) {
		const yesQuestions = new Set(people.join(''));

		solution[0] += yesQuestions.size;

		const personAnswers = people.map(answers => new Set(answers));

		// eslint-disable-next-line unicorn/no-reduce
		const intersection = personAnswers.reduce((a, b) => calculateIntersection(a, b));

		solution[1] += intersection.size;
	}

	return solution;
}
