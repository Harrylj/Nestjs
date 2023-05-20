import { Module } from '@nestjs/common';
import { ProviService } from './provi.service';
import { ProviService2 } from './provi.service2';
import { ProviController } from './provi.controller';

@Module({
  controllers: [ProviController],
  // providers:[ProviService]
  providers: [
    // 自定义名称
    {
      provide:"Provi",
      useClass:ProviService}
    // 自定义值
    ,{
      provide: "JD",
      useValue: ['TB', 'PDD', 'JD']
    }
    // 工厂模式
    ,ProviService2
    ,{
      provide:"Test",
      inject:[ProviService2],
      useFactory(ProviService2:ProviService2){
        return ProviService2
      }
    }
  ]

})
export class ProviModule {}
