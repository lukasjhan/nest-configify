<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center"><b>nest-configify</b></p>
<p align="center">NestJS type-safe configuration library</p>

# nest-configify

`nest-configify` is a powerful configuration management library for NestJS applications. It provides a clean, type-safe, and decorator-based approach to handling configuration in your NestJS projects.

## Features

- 🚀 Easy integration with NestJS projects
- 🔒 Type-safe configuration using TypeScript
- 🎨 Decorator-based configuration definition
- ✅ Built-in validation using class-validator
- 🔧 Support for environment variables and default values
- 🌈 Flexible parsing of configuration values

## Installation

To install `nest-configify`, run the following command in your project directory:

```bash
npm install nest-configify class-validator class-transformer
```

## Usage

### 1. Define your configuration

Create a configuration class using the `@Config()` decorator and define your configuration properties using the `@Value()` decorator:

```typescript
import { Config, Value } from 'nest-configify';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Config()
export class AppConfig {
  @Value('PORT', { parse: (v) => parseInt(v, 10) })
  @IsNumber()
  @IsNotEmpty()
  port: number;

  @Value('DATABASE_URL')
  @IsString()
  @IsNotEmpty()
  databaseUrl: string;

  @Value('API_KEY', { defaultValue: 'default-key' })
  @IsString()
  apiKey: string;
}
```

### 2. Import ConfigifyModule in your app module

```typescript
import { Module } from '@nestjs/common';
import { ConfigifyModule } from 'nest-configify';
import { AppConfig } from './app.config';

@Module({
  imports: [
    ConfigifyModule.forRoot({
      configs: [AppConfig],
      envFilePath: '.env',
    }),
  ],
  // ...
})
export class AppModule {}
```

### 3. Use the configuration in your services

```typescript
import { Injectable } from '@nestjs/common';
import { AppConfig } from './app.config';

@Injectable()
export class AppService {
  constructor(private readonly appConfig: AppConfig) {}

  getPort(): number {
    return this.appConfig.port;
  }
}
```

## API Reference

### @Config()

Class decorator to mark a class as a configuration class.

### @Value(key: string, options?: ValueOptions)

Property decorator to bind a configuration value to a class property.

Options:

- `parse`: A function to parse the string value from the environment variable
- `defaultValue`: A default value to use if the environment variable is not set

### ConfigifyModule.forRoot(options)

Static method to configure the ConfigifyModule.

Options:

- `configs`: An array of configuration classes
- `envFilePath`: Path to the .env file (optional)

## Validation

`nest-configify` uses `class-validator` for runtime validation of configuration values. You can use any of the `class-validator` decorators to add validation rules to your configuration properties.

## Best Practices

1. Group related configuration properties into separate configuration classes.
2. Use meaningful names for your configuration classes and properties.
3. Always provide default values for optional configuration properties.
4. Use appropriate validation decorators to ensure the integrity of your configuration.
5. Keep sensitive information (like API keys) in environment variables and not in your codebase.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
