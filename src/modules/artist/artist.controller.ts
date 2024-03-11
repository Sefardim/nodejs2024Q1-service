import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { ArtistService } from './artist.service';
import { IArtist } from '../artist/interfaces/artist.interface';
import { CreateArtistDto } from '../artist/dto/create.artist.dto';
import { UpdateArtistDto } from '../artist/dto/update.artist.dto';
import { Artist } from '../../common/decorators/artist.decorator';

@Controller('artist')
@ApiTags('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getAllArtist(): IArtist[] {
    return this.artistService.getAllArtist();
  }

  @Post()
  createArtist(@Body() createArtistDto: CreateArtistDto): IArtist {
    return this.artistService.createArtist(createArtistDto);
  }

  @Get(':id')
  getArtistById(@Artist() artist: IArtist): IArtist {
    return this.artistService.getArtistsById(artist);
  }

  @Put(':id')
  updateArtistById(
    @Artist() artist: IArtist,
    @Body() updateArtistDto: UpdateArtistDto,
  ): IArtist {
    return this.artistService.updateArtistById(updateArtistDto, artist.id);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteArtistById(@Artist() artist: IArtist) {
    return this.artistService.deleteArtistById(artist.id);
  }
}
