import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class CheckNicknameDto extends PickType(CreateUserDto, ['nickname' as const]) {}
