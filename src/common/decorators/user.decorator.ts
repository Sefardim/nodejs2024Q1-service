import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';

import { getUserByIdWithPassword } from '../../database/users';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userId = request.params?.id;

    if (!uuidValidate(userId)) {
      throw new BadRequestException('User id is invalid');
    }

    const user = getUserByIdWithPassword(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  },
);
