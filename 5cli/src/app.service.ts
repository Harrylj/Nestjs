import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '小满 Hello World!';
  }
  getAlanHello(): string {
    return 'Alan Hello World!';
  }

}
