import { Injectable } from '@nestjs/common';
import { MyConfig } from './myconfig';

@Injectable()
export class AppService {
  constructor(private readonly myConfig: MyConfig) {}
  getHello(): string {
    console.log(this.myConfig.port);
    console.log(typeof this.myConfig.port);
    console.log(this.myConfig.pw);
    console.log(this.myConfig.username);
    return 'Hello World!';
  }
}
