import { NestFactory } from '@nestjs/core';
import { Configuration } from './\bconfig/Configuration';
import { Logger } from './module/logger';
import { MainModule } from './module/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });

  await app.listen(process.env.PORT ?? 3000);

  Logger.info(
    `Server run PORT: ${Configuration.getConfig().PORT} ENV: ${Configuration.getConfig().ENV}`,
  );
}

bootstrap();
