import { Config, Value } from 'nest-configify';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

@Config()
export class MyConfig {
  @Value('PORT', { parse: (v) => parseInt(v, 10) })
  @IsNumber()
  @Max(65535)
  @Min(0)
  public port: number;

  @Value('PASSWORD')
  @IsString()
  public pw: string;

  @Value('NOENV_HERE', { defaultValue: 'default' })
  @IsNotEmpty()
  public username: string;
}
