import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserIdentification, UserIdentificationSchema } from './user-identification.schema';
import { UserIdentificationService } from './user-identification.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserIdentification.name, schema: UserIdentificationSchema }])],
  providers: [UserIdentificationService],
})
export class UserIdentificationModule {}
