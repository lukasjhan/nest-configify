import { ConfigService } from '@nestjs/config';

export interface ValueOptions<T = any> {
  parse?: (value: string) => T;
  defaultValue?: T;
}

export const Value = (
  key: string,
  options?: ValueOptions,
): PropertyDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const configService = new ConfigService();

    Object.defineProperty(target, propertyKey, {
      get() {
        let value = configService.get(key, undefined);
        console.log('debug: ', key, value, typeof value);
        if (value === undefined && options?.defaultValue !== undefined) {
          value = options.defaultValue;
        }
        if (options?.parse) {
          value = options.parse(value);
        }
        return value;
      },
      enumerable: true,
      configurable: true,
    });
  };
};
