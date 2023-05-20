import { Module } from '@nestjs/common';
import { AlanService } from './alan.service';
import { AlanController } from './alan.controller';

@Module({
  controllers: [AlanController],
  providers: [AlanService]
})
export class AlanModule {}
