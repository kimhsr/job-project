import { Inject, Injectable } from '@nestjs/common';
import { SessionService } from '../../domain/session/session.service';
import { UserIdentificationService } from '../../domain/user-identification/user-identification.service';
import { UserType } from '../../domain/user-identification/user-type.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserIdentificationService) private readonly userIdentifcationService: UserIdentificationService,
    @Inject(SessionService) private readonly sessionService: SessionService
  ) {}

  async fetchUserInfo(email: string) {
    return await this.userIdentifcationService.fetchUser(email);
  }

  async logIn(email: string, password: string) {
    const user = await this.userIdentifcationService.validateUser(email, password);
    const sessionId = await this.sessionService.registerSession(user.email, user.nickname, user.ulid);
    return sessionId;
  }

  async logOutAllDevice(userUlid: string) {
    await this.sessionService.deleteSessionByUserIdentification(userUlid);
    return;
  }

  async logOut(sessionId: string) {
    await this.sessionService.deleteSessionBySessionId(sessionId);
    return;
  }

  async signUp(email: string, nickname: string, password: string) {
    return await this.userIdentifcationService.signUp(email, nickname, password, UserType.jobSeeker);
  }

  async signOut(ulid: string) {
    return await this.userIdentifcationService.signOut(ulid);
  }

  async checkDuplicateEmail(email: string) {
    return await this.userIdentifcationService.checkDuplicateEmail(email);
  }

  async checkDuplicateNickname(nickname: string) {
    return await this.userIdentifcationService.checkDuplicateNickname(nickname);
  }

  async changeNickname(userUlid: string, newNickname: string) {
    const user = await this.userIdentifcationService.changeNickname(userUlid, newNickname);
    const sessionId = await this.sessionService.registerSession(user.email, user.nickname, user.ulid);
    return sessionId;
  }

  async changePassword(userUlid: string, oldPassword: string, newPassword: string) {
    const user = await this.userIdentifcationService.changePassword(userUlid, oldPassword, newPassword);
    const sessionId = await this.sessionService.registerSession(user.email, user.nickname, user.ulid);
    return sessionId;
  }
}
