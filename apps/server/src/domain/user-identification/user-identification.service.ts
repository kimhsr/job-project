import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserIdentification, UserIdentificationDocument } from './user-identification.schema';

@Injectable()
export class UserIdentificationService {
  constructor(@InjectModel(UserIdentification.name) private userIdentificationModel: Model<UserIdentificationDocument>) {}

  private async validation() {
    const sample = await this.userIdentificationModel.find({ email: 'nawhes@naver.com' }).exec();
    return sample === undefined;
  }
}
