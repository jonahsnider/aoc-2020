import {join} from 'path';
import {linesSync} from './lib/fs.js';
import {loggerScope} from './lib/logger.js';
import * as solutions from './solutions';

const logger = loggerScope('solver');

logger.info('solving all solutions');

for (const [title, day] of Object.entries(solutions)) {
	const dayNumber = title.slice('day'.length);

	const input = linesSync(join(__dirname, '..', 'inputs', `${dayNumber}.txt`));

	const dayLogger = loggerScope(`${title}`);

	// TODO: Refactor to use console.table for a proper display of the output
	dayLogger.info('part 1:', day.part1(input), 'part 2:', day.part2(input));
}

logger.info('all solutions solved');
