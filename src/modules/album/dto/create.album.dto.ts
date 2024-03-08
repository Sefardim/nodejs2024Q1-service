import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ICreateAlbum } from '../interfaces/album.interface';

export class CreateAlbumDto implements ICreateAlbum {
  @ApiProperty()
  @IsString({ message: 'Album name must be a string' })
  name: string;

  @ApiProperty()
  @IsNumber({}, { message: 'Album year must be a number' })
  year: number;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Album artistId must be a string' })
  artistId: string;
}
