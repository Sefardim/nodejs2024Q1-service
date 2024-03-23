import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { ICreateAlbum } from '../interfaces/album.interface';
import { IsUuidOrNull } from '../../../common/validators/is.uuid.or.null.validator';

export class CreateAlbumDto implements ICreateAlbum {
  @ApiProperty({
    required: true,
    description: 'Album name',
    example: 'The Venice Connection',
    type: String,
  })
  @IsString({ message: 'Album name must be a string' })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Album year',
    example: 1989,
    type: Number,
  })
  @IsNumber({}, { message: 'Album year must be a number' })
  year: number;

  @ApiProperty({
    required: true,
    nullable: true,
    description: 'Artist id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUuidOrNull()
  artistId: string;
}
