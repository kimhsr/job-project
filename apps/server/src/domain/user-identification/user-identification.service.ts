import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserIdentification, UserIdentificationDocument } from './user-identification.schema';

import bcrypt from 'bcrypt';
import { UserType } from './user-type.enum';

@Injectable()
export class UserIdentificationService {
  private bcryptSaltRount = 10;
  constructor(@InjectModel(UserIdentification.name) private userIdentificationModel: Model<UserIdentificationDocument>) {}

  async checkDuplicateEmail(email: string) {
    const user = await this.userIdentificationModel.findOne({ email }).exec();
    return !!user;
  }

  async checkDuplicateNickname(nickname: string) {
    const user = await this.userIdentificationModel.findOne({ nickname }).exec();
    console.log(user);
    return !!user;
  }

  async signUp(email: string, nickname: string, password: string, userType: UserType) {
    if (!this.checkDuplicateEmail(email)) throw new Error('중복 이메일');
    if (!this.checkDuplicateNickname(nickname)) throw new Error('중복 닉네임');
    const encryptPassword = await bcrypt.hash(password, this.bcryptSaltRount);

    const user = new this.userIdentificationModel({ email, nickname, password: encryptPassword, userType });
    return await user.save();
  }

  async changeNickname(ulid: string, newNickname: string) {
    if (!this.checkDuplicateNickname(newNickname)) throw new Error('중복 닉네임');
    const user = await this.userIdentificationModel.findOne({ ulid }).exec();
    if (!user) throw new Error('존재하지 않는 유저');
    user.nickname = newNickname;
    return await user.save();
  }

  async changePassword(ulid: string, oldPassword: string, newPassword: string) {
    const user = await this.userIdentificationModel.findOne({ ulid }).exec();
    if (!user) throw new Error('존재하지 않는 유저');
    if (await bcrypt.compare(oldPassword, user.password)) throw new Error('비밀번호가 일치하지 않음');
    const newEncryptPassword = await bcrypt.hash(newPassword, this.bcryptSaltRount);
    user.password = newEncryptPassword;
    return await user.save();
  }

  async signOut(ulid: string) {
    const user = await this.userIdentificationModel.findOne({ ulid }).exec();
    if (!user) throw new Error('존재하지 않는 유저');
    await user.delete().exec();
    return;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userIdentificationModel.findOne({ email }).exec();
    if (!user) throw new Error('존재하지 않는 유저');
    if (!(await bcrypt.compare(password, user.password))) throw new Error('비밀번호가 일치하지 않음');
    return user;
  }

  async fetchUser(email: string) {
    const user = await this.userIdentificationModel.findOne({ email }).exec();
    if (!user) throw new Error('존재하지 않는 유저');
    return user;
  }
}
