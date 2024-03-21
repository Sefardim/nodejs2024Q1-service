import { Controller, Delete, Get, Header, HttpCode, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { FavoritesService } from './favorites.service';
import { IFavoritesResponse } from './interfaces/favorires.interface';

@Controller('favs')
@ApiTags('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAllFavorites(): Promise<IFavoritesResponse> {
    return this.favoritesService.getAllFavorites();
  }

  @Post('/track/:id')
  @Header('Content-Type', 'application/json')
  addTrackToFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.addTrackToFavorites(id);
  }

  @Delete('/track/:id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrackFromFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.removeTrackFromFavorites(id);
  }

  @Post('/album/:id')
  @Header('Content-Type', 'application/json')
  addAlbumToFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.addAlbumToFavorites(id);
  }

  @Delete('/album/:id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbumFromFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.removeAlbumFromFavorites(id);
  }

  @Post('/artist/:id')
  @Header('Content-Type', 'application/json')
  addArtistToFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.addArtistToFavorites(id);
  }

  @Delete('/artist/:id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtistFromFavorites(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.favoritesService.removeArtistFromFavorites(id);
  }
}
