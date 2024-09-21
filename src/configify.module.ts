import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_CLASS_KEY } from './config.decorator';
import { validateSync } from 'class-validator';

@Global()
@Module({})
export class ConfigifyModule {
  static forRoot(
    options: {
      envFilePath?: string | string[];
      configs?: any[];
    } = {},
  ): DynamicModule {
    const configProviders = (options.configs || []).map((configClass) => {
      if (!Reflect.getMetadata(CONFIG_CLASS_KEY, configClass)) {
        throw new Error(
          `Class ${configClass.name} must be decorated with @Config()`,
        );
      }

      return {
        provide: configClass,
        useFactory: () => {
          const instance = new configClass();
          const errors = validateSync(instance);
          if (errors.length > 0) {
            throw new Error(`Config validation failed: ${errors.toString()}`);
          }
          return instance;
        },
      };
    });

    return {
      module: ConfigifyModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: options.envFilePath,
        }),
      ],
      providers: [...configProviders],
      exports: [
        ConfigModule,
        ...configProviders.map((provider) => provider.provide),
      ],
    };
  }
}
