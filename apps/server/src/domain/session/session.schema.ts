import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { UserIdentification } from '../user-identification/user-identification.schema';

export type SessionDocument = HydratedDocument<Session>;

@Schema({ timestamps: true })
export class Session {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true, maxlength: 16, minlength: 2 })
  nickname: string;

  @Prop({ required: true })
  userUlid: string;

  @Prop({ type: Date, expires: 86400 })
  lastUsed: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
