import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ulid } from 'ulid';

export type UserIdentificationDocument = HydratedDocument<UserIdentification>;

@Schema({ timestamps: true })
export class UserIdentification {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true, maxlength: 16, minlength: 2 })
  nickname: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: () => ulid() })
  ulid: string;
}

export const UserIdentificationSchema = SchemaFactory.createForClass(UserIdentification);
