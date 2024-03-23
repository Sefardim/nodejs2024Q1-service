import { Injectable } from '@nestjs/common';
import {
  ArtistsDb,
  createArtist,
  deleteArtistById,
  updateArtistById,
} from '../../database/artists';
import { IArtist } from './interfaces/artist.interface';
import { CreateArtistDto } from './dto/create.artist.dto';
import { UpdateArtistDto } from './dto/update.artist.dto';

@Injectable()
export class ArtistService {
  getAllArtist(): IArtist[] {
    return ArtistsDb;
  }

  createArtist(createArtistDto: CreateArtistDto): IArtist {
    return createArtist(createArtistDto);
  }

  getArtistsById(artist: IArtist): IArtist {
    return artist;
  }

  updateArtistById(updateArtistDto: UpdateArtistDto, id: string): IArtist {
    return updateArtistById(updateArtistDto, id);
  }

  deleteArtistById(id: string) {
    return deleteArtistById(id);
  }
}
