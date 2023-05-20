import { Controller, Get, Post, Body, Patch, Param, Delete,Res,Query } from '@nestjs/common';
import { XiaomanService } from './xiaoman.service';
// 调用共享模块数据,还需要在xiaoman.module.ts里引入shareModule
import { ShareService } from '../share/share.service';
// 调用全局模块，不需要module引入
import { GlobalService } from '../global/global.service';
import { CreateXiaomanDto } from './dto/create-xiaoman.dto';
import { UpdateXiaomanDto } from './dto/update-xiaoman.dto';

// 不使用版本控制 http://localhost:3000/xiaoman
// @Controller('xiaoman')

// 使用版本控制 http://localhost:3000/v1/xiaoman
@Controller({
  path:"xiaoman",
  version:"1"
})
export class XiaomanController {
  constructor(
    private readonly xiaomanService: XiaomanService,
    private readonly shareService: ShareService,
    private readonly globalService: GlobalService,
    ) {}

  @Post()
  create(@Body() createXiaomanDto: CreateXiaomanDto) {
    return this.xiaomanService.create(createXiaomanDto);
  }

  @Get()
  findAll() {
    return this.xiaomanService.findAll() + this.shareService.share()
    // return this.xiaomanService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.xiaomanService.findOne(+id) + this.globalService.global();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateXiaomanDto: UpdateXiaomanDto) {
    return this.xiaomanService.update(+id, updateXiaomanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.xiaomanService.remove(+id);
  }
}
