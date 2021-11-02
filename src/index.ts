import { getDayFormat } from './util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

global.createNewFile = (): void => {
  Logger.log('Hello world!');
};
