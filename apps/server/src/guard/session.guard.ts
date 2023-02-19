import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SessionService } from '../domain/session/session.service';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly sessionService: SessionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { 'session-id': sessionId } = request.headers;
    if (!sessionId) throw new ForbiddenException('세션아이디가 없음');
    request.user = await this.sessionService.findSessionWithRolling(sessionId);
    return true;
  }
}
