import {join} from 'path';
import {linesSync} from './lib/fs.js';
import {loggerScope} from './lib/logger.js';
import * as solutions from './solutions';

const logger = loggerScope('solver');

logger.info('solving all solutions');

for (const [title, day] of Object.entries(solutions)) {
	const dayNumber = title.slice('day'.length);

	const input = linesSync(join(__dirname, '..', '..', 'inputs', `${dayNumber}.txt`));

	const dayLogger = loggerScope(`${title}`);

	// TODO: Refactor to use console.table for a proper display of the output
	const [part1, part2] = day(input);
	dayLogger.info('part 1:', part1, 'part 2:', part2);
}

logger.info('all solutions solved');
