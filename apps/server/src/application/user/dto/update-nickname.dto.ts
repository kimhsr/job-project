import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateNicknameDto extends PickType(CreateUserDto, ['nickname' as const]) {}
