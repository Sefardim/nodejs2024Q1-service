import { v4 as uuidv4 } from 'uuid';

import { IArtist } from '../modules/artist/interfaces/artist.interface';
import { CreateArtistDto } from '../modules/artist/dto/create.artist.dto';
import { UpdateArtistDto } from '../modules/artist/dto/update.artist.dto';

export const ArtistsDb: IArtist[] = [];

export const createArtist = (createArtistDto: CreateArtistDto): IArtist => {
  const artist = {
    ...createArtistDto,
    id: uuidv4(),
  };
  ArtistsDb.push(artist);
  return artist;
};

export const getArtistById = (id: string): IArtist => {
  return ArtistsDb.find((artist) => artist.id === id);
};

export const updateArtistById = (
  updateArtistDto: UpdateArtistDto,
  id: string,
): IArtist => {
  const currentArtistIndex = ArtistsDb.findIndex((artist) => artist.id === id);
  ArtistsDb[currentArtistIndex] = {
    ...ArtistsDb[currentArtistIndex],
    ...updateArtistDto,
  };
  return ArtistsDb[currentArtistIndex];
};

export const isArtistExist = (id: string): boolean => {
  return !!ArtistsDb.find((artist) => artist.id === id);
};

export const deleteArtistById = (id: string): void => {
  const currentArtistIndex = ArtistsDb.findIndex((artist) => artist.id === id);
  ArtistsDb.splice(currentArtistIndex, 1);
};
