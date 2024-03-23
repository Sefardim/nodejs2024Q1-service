import { Injectable } from '@nestjs/common';
import {
  AlbumsDb,
  createAlbum,
  deleteAlbumById,
  updateAlbum,
} from '../../database/albums';
import { IAlbum } from './interfaces/album.interface';
import { CreateAlbumDto } from './dto/create.album.dto';

@Injectable()
export class AlbumService {
  getAllAlbums(): IAlbum[] {
    return AlbumsDb;
  }

  createAlbum(createAlbumDto: CreateAlbumDto): IAlbum {
    return createAlbum(createAlbumDto);
  }

  getAlbumById(album: IAlbum): IAlbum {
    return album;
  }

  updateAlbumById(updateAlbumDto: CreateAlbumDto, id: string) {
    return updateAlbum(updateAlbumDto, id);
  }

  deleteAlbumById(id: string) {
    return deleteAlbumById(id);
  }
}
