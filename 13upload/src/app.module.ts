import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';
import { PipeModule } from './pipe/pipe.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UploadModule, UserModule, PipeModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
