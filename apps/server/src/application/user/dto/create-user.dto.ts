import { IsEmail, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Matches(/^[ㄱ-ㅎ|가-힣|ㅏ-ㅣ|a-z|A-Z|0-9|]{2,16}$/)
  @Length(2, 16)
  nickname: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  password: string;
}
