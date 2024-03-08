import { v4 as uuidv4 } from 'uuid';

import { IAlbum } from '../modules/album/interfaces/album.interface';
import { CreateAlbumDto } from '../modules/album/dto/create.album.dto';
import { TracksDb } from './traks';

export const AlbumsDb: IAlbum[] = [];

export const isAlbumExist = (id: string): boolean => {
  return !!AlbumsDb.find((album) => album.id === id);
};

export const getAlbumById = (id: string): IAlbum => {
  return AlbumsDb.find((album)=> album.id === id);
};

export const createAlbum = (createAlbumDto: CreateAlbumDto): IAlbum => {
  const album = {
    ...createAlbumDto,
    id: uuidv4(),
  };
  AlbumsDb.push(album);
  return album;
};

export const updateAlbum = (createAlbumDto: CreateAlbumDto, id: string): IAlbum => {
  const currentAlbumIndex = TracksDb.findIndex((album) => album.id === id);
  AlbumsDb[currentAlbumIndex] = {
    ...AlbumsDb[currentAlbumIndex],
    ...createAlbumDto,
  };
  return AlbumsDb[currentAlbumIndex];
};

export const deleteAlbumById = (id: string): void => {
  const currentAlbumIndex = TracksDb.findIndex((album) => album.id === id);
  AlbumsDb.splice(currentAlbumIndex, 1);
};
