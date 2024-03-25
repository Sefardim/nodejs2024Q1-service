import {
  IFavorites,
  IFavoritesResponse,
} from '../modules/favorites/interfaces/favorires.interface';
import { getTrackById } from './traks';
import { getArtistById } from './artists';
import { getAlbumById } from './albums';

export const favoritesDb: IFavorites = {
  artists: [],
  albums: [],
  tracks: [],
};

export const addFavoriteTrack = (id: string): void => {
  favoritesDb.tracks.push(id);
};

export const addFavoriteAlbum = (id: string): void => {
  favoritesDb.albums.push(id);
};

export const addFavoriteArtist = (id: string): void => {
  favoritesDb.artists.push(id);
};

export const getAllFavorites = (): IFavoritesResponse => {
  const artists = favoritesDb.artists.map((id) => getArtistById(id));
  const albums = favoritesDb.albums.map((id) => getAlbumById(id));
  const tracks = favoritesDb.tracks.map((id) => getTrackById(id));

  return {
    artists,
    albums,
    tracks,
  };
};

export const removeFavoriteTrack = (id: string) => {
  const currentTrackIndex = favoritesDb.tracks.findIndex((ids) => ids === id);
  favoritesDb.tracks.splice(currentTrackIndex, 1);
};

export const removeFavoriteAlbum = (id: string) => {
  const currentAlbumIndex = favoritesDb.albums.findIndex((ids) => ids === id);
  favoritesDb.albums.splice(currentAlbumIndex, 1);
};

export const removeFavoriteArtist = (id: string) => {
  const currentArtistIndex = favoritesDb.artists.findIndex((ids) => ids === id);
  favoritesDb.artists.splice(currentArtistIndex, 1);
};
