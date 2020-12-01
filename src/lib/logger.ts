import {Logger} from 'tslog';

export const logger = new Logger({name: '@pizzafox/aoc-2020'});

export function loggerScope(name: string) {
	return logger.getChildLogger({name});
}
