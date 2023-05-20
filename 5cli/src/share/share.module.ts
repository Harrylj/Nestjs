import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';

@Module({
  controllers: [ShareController],
  providers: [ShareService],
  // 共享模块关键是要设置这个
  exports:[ShareService]
})
export class ShareModule {}
