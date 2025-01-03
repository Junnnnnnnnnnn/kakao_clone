/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Configuration } from './config/configuration';
import { Logger } from './module/logger';
import { MainModule } from './module/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });

  app.use((req: Request, res: Response, next: NextFunction) =>
    Logger.scope(uuidV4(), next),
  );

  await app.listen(process.env.PORT ?? 3000);

  Logger.info(
    `Server start PORT: ${process.env.PORT ?? 3000} ENV: ${Configuration.getConfig().ENV}`,
  );
}

bootstrap();
