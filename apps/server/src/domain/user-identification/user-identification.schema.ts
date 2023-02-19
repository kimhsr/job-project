import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ulid } from 'ulid';
import { UserType } from './user-type.enum';

export type UserIdentificationDocument = HydratedDocument<UserIdentification>;

@Schema({ timestamps: true })
export class UserIdentification {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, unique: true, maxlength: 16, minlength: 2 })
  nickname: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, default: () => ulid() })
  ulid: string;

  @Prop({ type: String, enum: UserType, required: true })
  userType: UserType;
}

export const UserIdentificationSchema = SchemaFactory.createForClass(UserIdentification);
