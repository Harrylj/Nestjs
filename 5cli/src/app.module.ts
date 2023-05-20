import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { XiaomanModule } from './xiaoman/xiaoman.module';
import { AlanModule } from './alan/alan.module';
import { ProviModule } from './provi/provi.module';
// 共享模块
import { ShareModule } from './share/share.module';
// 全局模块
import { GlobalModule } from './global/global.module';
// 动态模块
import { ConfigModule } from './config/config.module';

@Module({
  imports: [UserModule, XiaomanModule, AlanModule, ProviModule, ShareModule,GlobalModule,
    ConfigModule.forRoot({
      path:"/xiaoman"
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
