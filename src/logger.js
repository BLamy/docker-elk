import winston from "winston";
import "winston-daily-rotate-file";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ES Module 에서는 __dirname 이 없으므로 이렇게 정의해준다
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {
  format: { combine, colorize, timestamp, json },
} = winston;

const fileTransport = new winston.transports.DailyRotateFile({
  filename: "%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "20m",
  maxFiles: "14d",
  dirname: path.join(__dirname, "./logs"),
});

const logger = winston.createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [fileTransport],
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

export default logger;