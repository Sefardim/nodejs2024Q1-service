import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';

import { IFavoritesResponse } from './interfaces/favorires.interface';
import { PrismaService } from '../../../prisma/prisma.service';


@Injectable()
export class FavoritesService {
  constructor (private readonly prisma: PrismaService) {}
  async getAllFavorites(): Promise<IFavoritesResponse> {
    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites) {
      return {
        artists: [],
        albums: [],
        tracks: []
      }
    }

    const { artists: artistsIds, albums: albumsIds, tracks: tracksIds } = favorites;

    const artists = await this.prisma.artist.findMany({
          where: {
            id: { in: artistsIds },
          }
    });

    const albums = await this.prisma.album.findMany({
      where: {
        id: { in: albumsIds },
      }
    });

    const tracks = await this.prisma.track.findMany({
      where: {
        id: { in: tracksIds },
      }
    });

    return {
      artists,
      albums,
      tracks
    };
  }

  async addTrackToFavorites(id: string): Promise<void> {
    const track = await this.prisma.track.findUnique({
      where: {
        id
      }
    });

    if (!track) {
      throw new UnprocessableEntityException(
          "Track with this id doesn't exist"
      );
    }

    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites) {
      await this.prisma.favorites.create({
        data: {
          artists: [],
          albums: [],
          tracks: [id]
        }
      });
      return;
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        tracks: {
          push: id
        }
      }
    });
  }

  async removeTrackFromFavorites(id: string): Promise<void> {
    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites?.tracks?.includes(id)) {
      throw new NotFoundException('Track not found');
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        tracks: {
          set: favorites.tracks.filter((ids) => ids !== id),
        },
      },
    });
  }

  async addAlbumToFavorites(id: string): Promise<void> {
    const album = await this.prisma.album.findUnique({
      where: {
        id
      }
    });

    if (!album) {
      throw new UnprocessableEntityException(
          "Album with this id doesn't exist"
      );
    }

    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites) {
      await this.prisma.favorites.create({
        data: {
          artists: [],
          albums: [id],
          tracks: []
        }
      });
      return;
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        albums: {
          push: id
        }
      }
    });
  }

  async removeAlbumFromFavorites(id: string): Promise<void> {
    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites?.albums?.includes(id)) {
      throw new NotFoundException('Album not found');
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        albums: {
          set: favorites.albums.filter((ids) => ids !== id),
        },
      },
    });
  }

  async addArtistToFavorites(id: string): Promise<void> {
    const artist = await this.prisma.artist.findUnique({
      where: {
        id
      }
    });

    if (!artist) {
      throw new UnprocessableEntityException(
          "Artist with this id doesn't exist"
      );
    }

    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites) {
      await this.prisma.favorites.create({
        data: {
          artists: [id],
          albums: [],
          tracks: []
        }
      });
      return;
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        artists: {
          push: id
        }
      }
    });
  }

  async removeArtistFromFavorites(id: string): Promise<void> {
    const favorites= await this.prisma.favorites.findFirst();

    if (!favorites?.artists?.includes(id)) {
      throw new NotFoundException('Artist not found');
    }

    await this.prisma.favorites.update({
      where: {
        id: favorites.id
      },
      data: {
        artists: {
          set: favorites.artists.filter((ids) => ids !== id),
        },
      },
    });
  }
}
