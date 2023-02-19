import { createParamDecorator, ExecutionContext, ForbiddenException } from '@nestjs/common';

export const UserSession = createParamDecorator((data, ctx: ExecutionContext): ParameterDecorator => {
  const request = ctx.switchToHttp().getRequest();
  const { user } = request;
  if (user === undefined || user === null) throw new ForbiddenException('사용자 인증 실패');

  return request.user;
});
