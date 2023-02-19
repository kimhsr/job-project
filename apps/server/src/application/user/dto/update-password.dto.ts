import { PickType } from '@nestjs/mapped-types';
import { Matches } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdatePasswordDto extends PickType(CreateUserDto, ['password' as const]) {
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  oldPassword: string;
}
