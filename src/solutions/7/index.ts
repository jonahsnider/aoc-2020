import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

interface Bag {
	quantity: number;
	color: string;
}

export default function day7(rules: Lines): SolutionPair {
	const solution: SolutionPair = [0, 0];
	const graph: Map<string, Bag[]> = new Map();

	for (const rule of rules) {
		const first = rule.replace(/ bags? contain.+/, '');
		let childrenStrings: string[] = [];

		if (!rule.endsWith('no other bags.')) {
			childrenStrings = rule.split(', ');
			childrenStrings[0] = childrenStrings[0].replace(/\D+/, '');
			childrenStrings[childrenStrings.length - 1] = childrenStrings[childrenStrings.length - 1].slice(0, -1);
		}

		const children = childrenStrings.map(child => {
			const matches = /(?<quantity>\d+) (?<color>[\w\s]+) bags?/.exec(child);

			if (!matches?.groups) {
				throw new TypeError('No matches');
			}

			const {quantity, color} = matches.groups;

			return {quantity: Number(quantity), color, parent: first};
		});

		for (const child of children) {
			let parentNode = graph.get(child.parent);

			if (!parentNode) {
				const array: Bag[] = [];

				parentNode = array;

				graph.set(child.parent, array);
			}

			const {parent, ...rest} = child;
			parentNode.push(rest);
		}
	}

	for (const node of graph.values()) {
		const queue = new Set([node]);

		/* eslint-disable no-labels */
		queueLoop: for (const child of queue) {
			for (const bag of child) {
				if (bag.color === 'shiny gold') {
					solution[0]++;
					break queueLoop;
				}

				const next = graph.get(bag.color);
				if (next) {
					queue.add(next);
				}
			}
		}
	}
	/* eslint-enable no-labels */

	return solution;
}
