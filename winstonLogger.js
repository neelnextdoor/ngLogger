import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

class WinstonLogger {
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }), // Include stack traces for errors
        winston.format.splat(), // Allow string interpolation
        winston.format.json(),
        winston.format.prettyPrint(), 
        winston.format.colorize(),
      ),
      transports: [
        new DailyRotateFile({
            filename: './log/info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level : 'info',
            handleExceptions : true
          }),
          new DailyRotateFile({
            filename: './log/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level : 'error',
            handleExceptions : true
          }),
      ]
    });
  }

  info(message) {
    this.logger.log('info',message);
  }

  error(error,trace){
    this.logger.log('error',{error,trace});
  };
  
}

export default WinstonLogger;
