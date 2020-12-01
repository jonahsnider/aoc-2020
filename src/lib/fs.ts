import {PathLike, readFileSync} from 'fs';
import {readFile} from 'fs/promises';

/** Matches CRLF line endings. */
const crLf = /\r?\n/g;

export type Lines = string[];

/**
 * Read a file as UTF-8, trims whitespace, and then splits it by lines.
 * @param file - Path to read
 * @returns An array of lines in the file
 */
export async function lines(file: PathLike): Promise<Lines> {
	const contents = await readFile(file, 'utf-8');

	return contents.trim().split(crLf);
}

/**
 * Read a file as UTF-8, trims whitespace, and then splits it by lines.
 * @param file - Path to read
 * @returns An array of lines in the file
 */
export function linesSync(file: PathLike): Lines {
	const contents = readFileSync(file, 'utf-8');

	return contents.trim().split(crLf);
}
