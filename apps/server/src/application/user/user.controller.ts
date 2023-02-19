import { Body, Controller, Get, Inject, Post, Put, UseGuards } from '@nestjs/common';
import { UserSession } from '../../decorator/user.decorator';
import { Session } from '../../domain/session/session.schema';
import { SessionGuard } from '../../guard/session.guard';
import { CheckEmailDto } from './dto/check-email.dto';
import { CheckNicknameDto } from './dto/check-nickname.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateNicknameDto } from './dto/update-nickname.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Get()
  @UseGuards(SessionGuard)
  async fetchUserInfo(@UserSession() { email }: Session) {
    const result = await this.userService.fetchUserInfo(email);
    return result;
  }

  @Post('check/email')
  async checkEmail(@Body() { email }: CheckEmailDto) {
    const result = await this.userService.checkDuplicateEmail(email);
    return { result };
  }

  @Post('check/nickname')
  async checkNickname(@Body() { nickname }: CheckNicknameDto) {
    const result = await this.userService.checkDuplicateNickname(nickname);
    return { result };
  }

  @Post('signup')
  async signUp(@Body() { email, nickname, password }: CreateUserDto) {
    await this.userService.signUp(email, nickname, password);
    return { result: true };
  }

  @Post('login')
  async logIn(@Body() { email, password }: LoginDto) {
    const sessionId = await this.userService.logIn(email, password);
    return { sessionId };
  }

  @Put('nickname')
  @UseGuards(SessionGuard)
  async changeNickname(@UserSession() { userUlid }: Session, @Body() { nickname }: UpdateNicknameDto) {
    const sessionId = await this.userService.changeNickname(userUlid, nickname);
    return { sessionId };
  }

  @Put('password')
  @UseGuards(SessionGuard)
  async changePasswod(@UserSession() { userUlid }: Session, @Body() { oldPassword, password }: UpdatePasswordDto) {
    const sessionId = await this.userService.changePassword(userUlid, oldPassword, password);
    return { sessionId };
  }
}
