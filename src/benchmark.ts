import {Benchmark, discordReporter} from '@pizzafox/benchmark';
import {join} from 'path';
import {linesSync} from './lib/fs.js';
import {loggerScope} from './lib/logger.js';
import * as solutions from './solutions';

const benchmark = new Benchmark();

const logger = loggerScope('benchmark');

logger.info('benchmarking all solutions');

for (const [title, day] of Object.entries(solutions)) {
	const dayNumber = title.slice('day'.length);

	const input = linesSync(join(__dirname, '..', 'inputs', `${dayNumber}.txt`));

	benchmark.add(`${title} part 1`, () => day.part1(input));
	benchmark.add(`${title} part 2`, () => day.part2(input));
}

logger.info('benchmarks prepared');

benchmark
	.exec(1)
	.then(results => console.log(discordReporter(results)))
	.catch(error => logger.error(error));
