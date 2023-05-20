import { Controller, Get, Post, Body, Patch, Param, Delete,Req,Res,Session } from '@nestjs/common';
import { AlanService } from './alan.service';
import { CreateAlanDto } from './dto/create-alan.dto';
import { UpdateAlanDto } from './dto/update-alan.dto';
import * as svgCaptcha from 'svg-captcha'
import session from 'express-session';
@Controller('alan')
export class AlanController {
  constructor(private readonly alanService: AlanService) {}
  // 调用验证码http://localhost:3000/alan/code
  @Get('code')
  createCode(@Req() req,@Res() res,@Session() session){
   const Captcha =  svgCaptcha.create({
      size: 4,//生成几个验证码
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    })
    session.code = Captcha.text;
    res.type('image/svg+xml')
    res.send(Captcha.data)
  }

  @Post('create')
  createUser(@Req() req,@Body() body,@Session() session){
    console.log(body,session.code)
    if (req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        code:"200",
        message: "验证码正确"
      }
    } else {
      return {
        // 错误时还需要刷新验证码
        code:"222",
        message: "验证码错误"
      }
    }
  }


  // @Post()
  // create(@Body() createAlanDto: CreateAlanDto) {
  //   return this.alanService.create(createAlanDto);
  // }

  // @Get()
  // findAll() {
  //   return this.alanService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.alanService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAlanDto: UpdateAlanDto) {
  //   return this.alanService.update(+id, updateAlanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.alanService.remove(+id);
  // }
}
