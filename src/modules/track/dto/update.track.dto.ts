import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { ICreateTrack } from '../interfaces/track.interface';
import { IsUuidOrNull } from '../../../common/validators/is.uuid.or.null.validator';

export class UpdateTrackDto implements ICreateTrack {
  @ApiProperty({
    required: true,
    description: 'Track name',
    example: "Stayin' Alive",
    type: String,
  })
  @IsString({ message: 'Track name must be a string' })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Track duration',
    example: 1523423423,
    type: Number,
  })
  @IsNumber({}, { message: 'Track duration must be a number' })
  duration: number;

  @ApiProperty({
    required: true,
    description: 'Artist id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUuidOrNull()
  artistId: string;

  @ApiProperty({
    required: true,
    description: 'Album id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUuidOrNull()
  albumId: string;
}
