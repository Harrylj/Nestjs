import { Module,NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ShareModule } from '../share/share.module';
import { XiaomanService } from './xiaoman.service';
import { XiaomanController } from './xiaoman.controller';
// logger中间件
import { Logger } from '../middleware';

@Module({
  // 调用共享模块还需要imports引入
  imports:[ShareModule],
  controllers: [XiaomanController],
  providers: [XiaomanService]
})
export class XiaomanModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // http://localhost:3000/v1/xiaoman 可触发中间件
    consumer.apply(Logger).forRoutes({path:'v1/xiaoman',method:RequestMethod.GET})
    // 这个版本号怎么处理，现在只能http://localhost:3000/xiaoman 触发
    //consumer.apply(Logger).forRoutes(XiaomanController)
  }
}
