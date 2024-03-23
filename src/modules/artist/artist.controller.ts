import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { ArtistService } from './artist.service';
import { IArtist } from '../artist/interfaces/artist.interface';
import { CreateArtistDto } from '../artist/dto/create.artist.dto';
import { UpdateArtistDto } from '../artist/dto/update.artist.dto';

@Controller('artist')
@ApiTags('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAllArtist(): Promise<IArtist[]> {
    return this.artistService.getAllArtist();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createArtist(@Body() createArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.artistService.createArtist(createArtistDto);
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getArtistById(@Param('id', ParseUUIDPipe) id: string): Promise<IArtist> {
    return this.artistService.getArtistsById(id);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateArtistById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<IArtist> {
    return this.artistService.updateArtistById(updateArtistDto, id);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteArtistById(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.artistService.deleteArtistById(id);
  }
}
