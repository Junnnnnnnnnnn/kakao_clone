import { INestApplication } from '@nestjs/common';
import { Application } from 'express';
import morganBody from 'morgan-body';

import { Logger } from '../module/logger';

enum HttpDataType {
  REQUEST_BODY = 'Request Body',
  REQUEST = 'Request',
  RESPONSE_BODY = 'Response Body',
  RESPONSE = 'Response',
  HTTP = 'http',
}

const morganSetting = (app: INestApplication<any>) => {
  morganBody(app.getHttpAdapter().getInstance() as Application, {
    noColors: true, // 컬러 없이 출력
    prettify: false,
    stream: {
      write: (message: string) => {
        let convertMessage: Record<string, any>;
        let bodyType: string;

        try {
          if (message.includes(HttpDataType.REQUEST_BODY)) {
            convertMessage = JSON.parse(
              message
                .replace('\n', '')
                .replace(`${HttpDataType.REQUEST_BODY}:`, '')
                .trim(),
            );
            bodyType = HttpDataType.REQUEST_BODY;

            Logger.info(bodyType, convertMessage);
          } else if (message.includes(HttpDataType.RESPONSE_BODY)) {
            convertMessage = JSON.parse(
              message
                .replace('\n', '')
                .replace(`${HttpDataType.RESPONSE_BODY}:`, '')
                .trim(),
            );
            bodyType = HttpDataType.RESPONSE_BODY;
            Logger.info(bodyType, convertMessage);
          } else if (message.includes(HttpDataType.REQUEST)) {
            bodyType = HttpDataType.REQUEST;

            Logger.info(
              `${message.match(/Request:\s*(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE)\s+([^\s]+)/)[0]}`,
            );
          } else {
            Logger.info(message);
          }
        } catch {
          Logger.info(message);
        }

        return true;
      },
    },
  });
};

export default morganSetting;
