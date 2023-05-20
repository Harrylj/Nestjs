// 自定义名称和工厂模式
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ProviService } from './provi.service';
import { CreateProviDto } from './dto/create-provi.dto';
import { UpdateProviDto } from './dto/update-provi.dto';

@Controller('provi')
export class ProviController {
  // constructor(private readonly proviService: ProviService) {}
  // 自定义名称后需要使用inject来获取
  constructor (
    @Inject('Provi') private readonly proviService: ProviService,
    @Inject('JD') private shopList:string[],
    @Inject('Test') private testList:any
    ) {}


  @Post()
  create(@Body() createProviDto: CreateProviDto) {
    return this.proviService.create(createProviDto);
  }

  @Get()
  getHello():string[]{
    // return this.shopList
    return this.proviService.getHello()
  }

  @Get(':id')
  getHello2(@Param('id') id: string) {
    // return this.proviService.findOne(+id) + this.shopList;
    return this.testList.getHello2()
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProviDto: UpdateProviDto) {
  //   return this.proviService.update(+id, updateProviDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.proviService.remove(+id);
  // }
}
