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

import { AlbumService } from './album.service';
import { IAlbum } from '../Album/interfaces/Album.interface';
import { CreateAlbumDto } from '../Album/dto/create.Album.dto';
import { Album } from '../../common/decorators/album.decorator';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAllAlbums(): IAlbum[] {
    return this.albumService.getAllAlbums();
  }

  @Post()
  createAlbum(@Body() createAlbumDto: CreateAlbumDto): IAlbum {
    return this.albumService.createAlbum(createAlbumDto);
  }

  @Get(':id')
  getAlbumById(@Album() album: IAlbum): IAlbum {
    return this.albumService.getAlbumById(album);
  }

  @Put(':id')
  updateAlbumById(
    @Album() album: IAlbum,
    @Body() updateAlbumDto: CreateAlbumDto,
  ) {
    return this.albumService.updateAlbumById(updateAlbumDto, album.id);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteAlbumById(@Album() album: IAlbum) {
    return this.albumService.deleteAlbumById(album.id);
  }
}
