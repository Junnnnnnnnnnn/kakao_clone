import { AsyncLocalStorage } from 'async_hooks';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export class Logger {
  private static logger: winston.Logger = winston.createLogger({
    level: process.env.NODE_ENV === 'prod' ? 'info' : 'debug',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(({ timestamp, level, message, ...meta }) => {
        const traceId = Logger.getTraceId();
        return `${timestamp} [${traceId}] ${level.toUpperCase()}: ${message} ${
          Object.keys(meta).length ? JSON.stringify(meta) : ''
        }`;
      }),
    ),
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        dirname: '/logs', // 로그 파일이 생성될 디렉토리
        filename: '%DATE%.log', // 파일 이름 형식
        datePattern: 'YYYY-MM-DD', // 날짜 형식
        zippedArchive: true, // 오래된 로그를 압축
        maxSize: '20m', // 파일 크기 제한
        maxFiles: '14d', // 최대 보관 기간
      }),
    ],
  });
  private static als = new AsyncLocalStorage();

  static scope(traceId: string, callback: () => unknown): unknown {
    return this.als.run(traceId, callback);
  }

  static getTraceId(): string {
    return (this.als.getStore() as string) || '0';
  }

  static info(message: string, object?: Record<string, any>): void {
    this.logger.info({
      ...object,
      message,
    });
  }

  static warn(message: string, object?: Record<string, any>): void {
    this.logger.warn({
      ...object,
      message,
    });
  }

  static error(message: string, object?: Record<string, any>): void {
    this.logger.error({
      ...object,
      message,
    });
  }

  static debug(message: string, object?: Record<string, any>): void {
    this.logger.debug({
      ...object,
      message,
    });
  }
}
