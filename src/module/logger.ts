import { AsyncLocalStorage } from 'async_hooks';

export class Logger {
  private static als = new AsyncLocalStorage();

  static getTraceId(): string {
    const store = this.als.getStore();
    if (!store) {
      return 'no-trace-id';
    }

    return (store as string) || 'no-trace-id';
  }

  static info(message: string, object?: Record<string, any>): void {
    console.log({
      ...object,
      message,
      traceId: Logger.getTraceId(),
    });
  }
}
