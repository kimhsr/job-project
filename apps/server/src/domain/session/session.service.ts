import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session, SessionDocument } from './session.schema';

@Injectable()
export class SessionService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<SessionDocument>) {}

  async deleteSessionByUserIdentification(userUlid: string) {
    await this.sessionModel.deleteMany({ userUlid });
    return;
  }

  async deleteSessionBySessionId(sessionId: string) {
    await this.sessionModel.deleteOne({ _id: sessionId });
  }

  async findSessionWithRolling(sessionId: string) {
    const session = await this.sessionModel.findOne({ _id: sessionId });
    if (!session) throw new Error('세션이 없음');
    session.lastUsed = new Date();
    await session.save();
    return session;
  }

  async registerSession(email: string, nickname: string, userUlid: string) {
    const now = new Date();
    const session = new this.sessionModel({ email, nickname, userUlid, lastUsed: now });
    const result = await session.save();
    return session._id.valueOf();
  }
}
