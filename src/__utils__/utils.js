/**
 * Module contains test utils
 * @module __utils__/utils
 * @author Igor Ivanov
 */
import chalk from 'chalk';
/* eslint-disable */
export const testName = (title, description) => `[${chalk.yellow(title)}]: ${description}`;
/* eslint-enable */
