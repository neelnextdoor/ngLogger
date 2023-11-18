import Logger from './logger.js';
import WinstonLogger from './winstonLogger.js';

class ngLogger extends Logger {
  constructor() {
    super(new WinstonLogger());
  }
}

export default ngLogger;
