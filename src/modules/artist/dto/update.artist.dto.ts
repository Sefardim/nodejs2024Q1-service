import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

import { ICreateArtist } from '../interfaces/artist.interface';

export class UpdateArtistDto implements ICreateArtist {
  @ApiProperty()
  @IsString({ message: 'Artist name must be a string' })
  name: string;

  @ApiProperty()
  @IsBoolean({ message: 'Artist name must be a boolean' })
  grammy: boolean;
}
