import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const Value = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const configService = ctx
      .switchToHttp()
      .getRequest()
      .app.get(ConfigService);
    return configService.get(data);
  },
);
