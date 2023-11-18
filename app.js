// app.mjs

import ngLogger from './loggerBridge.js';

const logger = new ngLogger();

logger.info('This is a log message.');
logger.error('This is a error message.',{bla : 'bla'});

