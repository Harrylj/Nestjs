import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
// 接入第三方中间件 cors 处理跨域
import * as cors from 'cors'


// 全局中间件，可做白名单拦截之类的
const whiteList = ['/list']
function middleWareAll(req,res,next){
  console.log(req.originalUrl,'我是全局的,访问http://localhost:3000/list会被捕获')
  // 这里不应该用!的，不过为了顺利访问，这里就写反
  if(!whiteList.includes(req.originalUrl)){
    next()
  }else{
    res.send('小黑子露出鸡脚了吧,被拦截了')
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用 cors 处理跨域
  app.use(cors())
  // 调用全局中间件
  app.use(middleWareAll)
  // 注册版本控制
  app.enableVersioning({
    type:VersioningType.URI
  })
  // 使用express session
  app.use(session({secret:"XiaoMan",rolling:true,name:"xiaoman.sid",cookie:{maxAge:9999999}}))
  await app.listen(3000);
}
bootstrap();
