import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

import { ITrack } from '../interfaces/track.interface';

export class UpdateTrackDto implements ITrack {
  @ApiProperty()
  @IsUUID(4, { message: 'Track id must be a valid uuid' })
  id: string;

  @ApiProperty()
  @IsString({ message: 'Track name must be a string' })
  name: string;

  @ApiProperty()
  @IsNumber({}, { message: 'Track duration must be a number' })
  duration: number;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Track artistId must be a string' })
  artistId: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Track albumId must be a string' })
  albumId: string;
}
