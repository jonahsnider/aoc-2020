import {Benchmark, discordReporter} from '@pizzafox/benchmark';
import {join} from 'path';
import prettyMs from 'pretty-ms';
import {linesSync} from './lib/fs.js';
import {loggerScope} from './lib/logger.js';
import * as solutions from './solutions';
import {mean} from '@pizzafox/util';

const benchmark = new Benchmark();

const logger = loggerScope('benchmark');

logger.info('benchmarking all solutions');

for (const [title, day] of Object.entries(solutions)) {
	const dayNumber = title.slice('day'.length);

	const input = linesSync(join(__dirname, '..', '..', 'inputs', `${dayNumber}.txt`));

	benchmark.add(title, () => day(input));
}

logger.info('benchmarks prepared');

const warmUp = 50;
const trials = 500;

benchmark
	.exec(warmUp + trials)
	.then(results => {
		const times: Record<string, string> = {};

		for (const [day, executionTimes] of results) {
			times[day] = prettyMs(executionTimes.slice(warmUp).reduce(mean), {formatSubMilliseconds: true});
		}

		console.table(times);
	})
	.catch(error => logger.error(error));
