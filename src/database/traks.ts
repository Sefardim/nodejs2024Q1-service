import { v4 as uuidv4 } from 'uuid';

import { ITrack } from '../modules/track/interfaces/track.interface';
import { CreateTrackDto } from '../modules/track/dto/create.track.dto';
import { UpdateTrackDto } from '../modules/track/dto/update.track.dto';
import { favoritesDb } from './favorites';

export const TracksDb: ITrack[] = [];

export const createTrack = (createTrackDto: CreateTrackDto): ITrack => {
  const track = {
    ...createTrackDto,
    id: uuidv4(),
  };
  TracksDb.push(track);
  return track;
};

export const getTrackById = (id: string): ITrack => {
  return TracksDb.find((track) => track.id === id);
};

export const updateTrackById = (
  updateTrackDto: UpdateTrackDto,
  id: string,
): ITrack => {
  const currentTrackIndex = TracksDb.findIndex((track) => track.id === id);
  TracksDb[currentTrackIndex] = {
    ...TracksDb[currentTrackIndex],
    ...updateTrackDto,
    id,
  };
  return TracksDb[currentTrackIndex];
};

export const deleteTrackById = (id: string): void => {
  const currentTrackIndex = TracksDb.findIndex((track) => track.id === id);
  TracksDb.splice(currentTrackIndex, 1);

  const favoriteTrackIndex = favoritesDb.tracks.findIndex((ids) => ids === id);

  if (favoriteTrackIndex === -1) {
    return;
  }

  favoritesDb.tracks.splice(favoriteTrackIndex, 1);
};
