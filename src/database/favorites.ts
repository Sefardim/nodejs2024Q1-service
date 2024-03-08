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

export const isFavoriteAlbumExist = (id: string): boolean => {
  return !!favoritesDb.albums.find(albumId => albumId === id);
};

export const isFavoriteTrackExist = (id: string): boolean => {
  return !!favoritesDb.tracks.find(trackId => trackId === id);
};

export const isFavoriteArtistExist = (id: string): boolean => {
  return !!favoritesDb.artists.find(artistId => artistId === id);
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
