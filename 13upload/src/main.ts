import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';
import * as cors from 'cors'
import {join} from 'path'

import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 格式化返回请求信息
  app.useGlobalInterceptors(new Response())
  // 注册全局异常过滤器
  // app.useGlobalFilters(new HttpFilter())
  // 注册全局管道验证
  // !!!!原来是注册了全局异常过滤器的原因 HttpException返回的data并不是明确的错误，只是"data": "Http Exception"
  app.useGlobalPipes(new ValidationPipe())

  // 处理跨域
  app.use(cors())
  // const app = await NestFactory.create(AppModule);
  // 配置静态资源的访问
  app.useStaticAssets(join(__dirname,'images'),{
    //自定义路径访问
    //http://localhost:3000/1684477180754.png变成了http://localhost:3000/xiaoman/1684477180754.png
    prefix:"/xiaoman"
  })

  

  await app.listen(3000);
}
bootstrap();
