import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';

import { getTrackById } from '../../database/traks';

export const Track = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const trackId = request.params?.id;
    const route = request.route?.path;

    if (!uuidValidate(trackId)) {
      throw new BadRequestException('Track id is invalid');
    }

    const track = getTrackById(trackId);

    if (!track) {
      if (route === '/favs/track/:id') {
        throw new UnprocessableEntityException(
          "Track with this id doesn't exist",
        );
      } else {
        throw new NotFoundException('Track not found');
      }
    }

    return track;
  },
);
