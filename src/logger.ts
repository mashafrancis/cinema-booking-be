import {createLogger, format, transports} from 'winston';

const {combine, timestamp, printf} = format;

const options = {
  file: {
    level: 'info' || 'error',
    filename: `${__dirname}/../logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: true,
  },
};

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.splat(),
    format.json(),
    printf(({level, message, label, timestamp}) => `${timestamp} [${label}] ${level.toUpperCase()} - ${message}`),
  ),
  transports: [process.env.NODE_ENV !== 'development'
    ? new transports.File(options.file)
    : new transports.Console({
      format: format.combine(
        format.cli(),
        format.splat(),
      ),
    }),
  ]
});

export default logger;
