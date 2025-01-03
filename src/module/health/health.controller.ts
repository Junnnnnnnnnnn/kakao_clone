import { Controller, Get } from '@nestjs/common';

import { Logger } from '../logger';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  getHealth(): string {
    Logger.info('health check ok');
    return 'OK';
  }
}
