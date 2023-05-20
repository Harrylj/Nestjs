// 这里写错了，把upload的内容写这里了
import { Controller, Get,Post,UseInterceptors,UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
// 单个文件或者多个文件
import { FileInterceptor ,FilesInterceptor} from '@nestjs/platform-express/multer';

@Controller('upload')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Post('album')
  // // 处理文件
  // @UseInterceptors(FileInterceptor('file'))
  // upload(@UploadedFile() file){
  //   console.log(file,'file')
  //   return ' alan upload file'
  // }
  
}
