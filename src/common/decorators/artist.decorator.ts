import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';

import { getArtistById } from '../../database/artists';

export const Artist = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const artistId = request.params?.id;
    const route = request.route?.path;

    if (!uuidValidate(artistId)) {
      throw new BadRequestException('Artist id is invalid');
    }

    const artist = getArtistById(artistId);

    if (!artist) {
      if (route === '/favs/artist/:id') {
        throw new UnprocessableEntityException(
          "Artist with this id doesn't exist",
        );
      } else {
        throw new NotFoundException('Artist not found');
      }
    }

    return artist;
  },
);
