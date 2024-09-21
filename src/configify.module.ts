import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export type ConfigifyModuleOptions = {
  isGlobal?: boolean;
  envFilePath?: string;
};

@Global()
@Module({})
export class ConfigifyModule {
  static forRootAsync(options: ConfigifyModuleOptions = {}): DynamicModule {
    return {
      module: ConfigifyModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: options.isGlobal ?? true,
          envFilePath: options.envFilePath ?? '.env',
        }),
      ],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
      exports: ['CONFIG_OPTIONS'],
    };
  }
}
