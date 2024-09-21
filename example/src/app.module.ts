import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigifyModule } from 'nest-configify';
import { MyConfig } from './myconfig';

@Module({
  imports: [
    ConfigifyModule.forRoot({
      configs: [MyConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
