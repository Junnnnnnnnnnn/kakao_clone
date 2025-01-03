import { SupportEnv } from './src/config/enum/config.enum';
import dev from './src/config/env/dev';
import local from './src/config/env/local';
import prod from './src/config/env/prod';
import * as fs from 'fs';

const generator = () => {
  const env = process.env.NODE_ENV;
  let config;

  switch (env) {
    case SupportEnv.LOCAL:
      config = local;
      break;
    case SupportEnv.DEV:
      config = dev;
      break;
    case SupportEnv.PROD:
      config = prod;
      break;
    default:
      config = dev;
      break;
  }

  const content = Object.entries(config)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  fs.writeFileSync('.env', content);
  console.log('.env file has been generated');
};

generator();
