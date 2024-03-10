import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';

import { getAlbumById } from '../../database/albums';

export const Album = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const albumId = request.params?.id;
    const route = request.route?.path;

    if (!uuidValidate(albumId)) {
      throw new BadRequestException('Album id is invalid');
    }

    const album = getAlbumById(albumId);

    if (!album) {
      if (route === '/favs/album/:id') {
        throw new UnprocessableEntityException(
          "Album with this id doesn't exist",
        );
      } else {
        throw new NotFoundException('Album not found');
      }
    }

    return album;
  },
);
