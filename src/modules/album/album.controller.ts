import {
  Body,
  Controller,
  Delete,
  Get, Header,
  HttpCode, Param, ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { AlbumService } from './album.service';
import { IAlbum } from '../Album/interfaces/Album.interface';
import { CreateAlbumDto } from '../Album/dto/create.Album.dto';

@Controller('album')
@ApiTags('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAllAlbums(): Promise<IAlbum[]> {
    return this.albumService.getAllAlbums();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createAlbum(@Body() createAlbumDto: CreateAlbumDto): Promise<IAlbum> {
    return this.albumService.createAlbum(createAlbumDto);
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getAlbumById(@Param('id', ParseUUIDPipe) id: string): Promise<IAlbum> {
    return this.albumService.getAlbumById(id);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateAlbumById(
      @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAlbumDto: CreateAlbumDto,
  ): Promise<IAlbum> {
    return this.albumService.updateAlbumById(updateAlbumDto, id);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteAlbumById(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.albumService.deleteAlbumById(id);
  }
}
