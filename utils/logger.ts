import winston, { format, createLogger, transports } from "winston";

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
  format: combine(label({ label: "Relics" }), timestamp(), myFormat),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});


if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({colors:{error: 'red' },level:true}),
      winston.format.simple(),
    )
  }));
}
