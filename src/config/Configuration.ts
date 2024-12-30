import dev from './env/dev';
import local from './env/local';
import prod from './env/prod';
import test from './env/test';

export class Configuration {
  static getConfig(): ConfigImpl {
    const env = process.env.NODE_ENV;

    switch (env) {
      case SupportEnv.LOCAL:
        return local;
      case SupportEnv.DEV:
        return dev;
      case SupportEnv.TEST:
        return test;
      case SupportEnv.PROD:
        return prod;
      default:
        return dev;
    }
  }
}
