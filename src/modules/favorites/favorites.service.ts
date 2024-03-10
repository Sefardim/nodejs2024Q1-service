import { Injectable } from '@nestjs/common';
import {
  addFavoriteAlbum,
  addFavoriteArtist,
  addFavoriteTrack,
  getAllFavorites,
  removeFavoriteAlbum,
  removeFavoriteArtist,
  removeFavoriteTrack,
} from '../../database/favorites';
import { IFavoritesResponse } from './interfaces/favorires.interface';

@Injectable()
export class FavoritesService {
  getAllFavorites(): IFavoritesResponse {
    return getAllFavorites();
  }

  addTrackToFavorites(id: string) {
    return addFavoriteTrack(id);
  }

  removeTrackFromFavorites(id: string) {
    return removeFavoriteTrack(id);
  }

  addAlbumToFavorites(id: string) {
    return addFavoriteAlbum(id);
  }

  removeAlbumFromFavorites(id: string) {
    return removeFavoriteAlbum(id);
  }

  addArtistToFavorites(id: string) {
    return addFavoriteArtist(id);
  }

  removeArtistFromFavorites(id: string) {
    return removeFavoriteArtist(id);
  }
}
