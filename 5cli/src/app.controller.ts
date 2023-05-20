import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
// 调用共享模式数据
import { ShareService } from './share/share.service';

@Controller('get')
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly shareService: ShareService,
    @Inject('Config') private configPath:any) {}

  @Get('hello')
  // 设置参数后路由由http://localhost:3000/变更为http://localhost:3000/get/hello
  getHello(): string {
    return this.appService.getHello() + this.shareService.share();
  }
  @Get('helloAlan')
  getAlanHello(): string {
    return this.appService.getAlanHello();
  }
  @Get('path')
  getPath():any{
    return this.configPath
  }
}
