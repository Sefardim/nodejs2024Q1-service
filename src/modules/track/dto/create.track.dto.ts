import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ICreateTrack } from '../interfaces/track.interface';

export class CreateTrackDto implements ICreateTrack {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  duration: number;

  @IsOptional()
  @ApiProperty()
  @IsString()
  artistId: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  albumId: string;
}
