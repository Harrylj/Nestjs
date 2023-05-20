import { Controller, Get,Post,UseInterceptors,UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
// 单个文件或者多个文件
import { FileInterceptor ,FilesInterceptor} from '@nestjs/platform-express/multer';
import type { Response } from 'express'
// 压缩导出流文件
import {zip} from 'compressing'
import {join} from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('album')
  // 处理文件
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file){
    console.log(file,'file')
    return ' alan upload file'
  }
  
  // 使用download直接下载，好处是简单，缺点是不安全
  // 直接访问地址http://localhost:3000/upload/export 即可下载
  @Get('export')
  downLoad(@Res() res:Response){
    const url = join(__dirname,'../images/1684491659188.png')
    res.download(url)
  }

  // 使用流的方式，更安全，不过需要前端特殊处理,还需要解决跨域问题
  @Get('stream')
  async down(@Res() res:Response){
    const url = join(__dirname,'../images/1684491659188.png')
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader(
      'Content-Disposition',
      `attachment;filename=xiaoman`
    );

    tarStream.pipe(res)

  }
}
