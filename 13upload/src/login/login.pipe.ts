// 自己实现管道错误验证提示
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
// 验证
import { validate } from 'class-validator'; 
@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value,metadata)
    const DTO = plainToInstance(metadata.metatype,value)
    const errors = await validate(DTO)
    if(errors.length>0){
      // !!!!原来是注册了全局异常过滤器的原因 HttpException返回的data并不是明确的错误，只是"data": "Http Exception"
      throw new HttpException(errors,HttpStatus.NOT_FOUND)
    }
    console.log(errors)
    return value;
  }
}
