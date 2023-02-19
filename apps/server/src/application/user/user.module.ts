import { Module } from '@nestjs/common';
import { SessionModule } from '../../domain/session/session.module';
import { UserIdentificationModule } from '../../domain/user-identification/user-identification.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SessionModule, UserIdentificationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
