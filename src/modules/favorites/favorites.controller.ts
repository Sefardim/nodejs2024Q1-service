import { Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { FavoritesService } from './favorites.service';
import { IFavoritesResponse } from './interfaces/favorires.interface';
import { Track } from '../../common/decorators/track.decorator';
import { ITrack } from '../track/interfaces/track.interface';
import { Album } from '../../common/decorators/album.decorator';
import { IAlbum } from '../album/interfaces/album.interface';
import { Artist } from '../../common/decorators/artist.decorator';
import { IArtist } from '../artist/interfaces/artist.interface';

@Controller('favs')
@ApiTags('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAllFavorites(): IFavoritesResponse {
    return this.favoritesService.getAllFavorites();
  }

  @Post('/track/:id')
  addTrackToFavorites(@Track() track: ITrack) {
    return this.favoritesService.addTrackToFavorites(track.id);
  }

  @Delete('/track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrackFromFavorites(@Track() track: ITrack) {
    return this.favoritesService.removeTrackFromFavorites(track.id);
  }

  @Post('/album/:id')
  addAlbumToFavorites(@Album() album: IAlbum) {
    return this.favoritesService.addAlbumToFavorites(album.id);
  }

  @Delete('/album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbumFromFavorites(@Album() album: IAlbum) {
    return this.favoritesService.removeAlbumFromFavorites(album.id);
  }

  @Post('/artist/:id')
  addArtistToFavorites(@Artist() artist: IArtist) {
    return this.favoritesService.addArtistToFavorites(artist.id);
  }

  @Delete('/artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtistFromFavorites(@Artist() artist: IArtist) {
    return this.favoritesService.removeArtistFromFavorites(artist.id);
  }
}
