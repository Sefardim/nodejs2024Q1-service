import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

import { ICreateTrack } from '../interfaces/track.interface';

export class CreateTrackDto implements ICreateTrack {
  @ApiProperty({
    required: true,
    description: 'Track name',
    example: "Stayin' Alive",
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: 'Track duration',
    example: 1523423423,
    type: Number,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    required: true,
    description: 'Artist id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUUID(4, { message: 'Artist id must be a valid uuid' })
  artistId: string;

  @ApiProperty({
    required: true,
    description: 'Album id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUUID(4, { message: 'Album id must be a valid uuid' })
  albumId: string;
}
