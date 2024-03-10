import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

import { ICreateTrack } from '../interfaces/track.interface';

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
  @IsUUID(4, { message: 'Track artistId must be a string' })
  artistId: string;

  @ApiProperty({
    required: true,
    description: 'Album id',
    example: 'a38e02fd-52af-4f1d-992b-bbf4f62de5de',
    type: String,
  })
  @IsUUID(4, { message: 'Track albumId must be a string' })
  albumId: string;
}
