import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

import { ICreateArtist } from '../interfaces/artist.interface';

export class UpdateArtistDto implements ICreateArtist {
  @ApiProperty({
    required: true,
    description: 'Artis name',
    example: 'Santiano',
    type: String,
  })
  @IsString({ message: 'Artist name must be a string' })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Does the author have a grammy award?',
    example: false,
    type: Boolean,
  })
  @IsBoolean({ message: 'Artist name must be a boolean' })
  grammy: boolean;
}
