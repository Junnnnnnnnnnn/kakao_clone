import { NestFactory } from '@nestjs/core';
import { MainModule } from './module/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
