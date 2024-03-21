import { Injectable, NotFoundException } from '@nestjs/common';

import { IArtist } from './interfaces/artist.interface';
import { CreateArtistDto } from './dto/create.artist.dto';
import { UpdateArtistDto } from './dto/update.artist.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ArtistService {
  constructor (private readonly prisma: PrismaService) {}
  async getAllArtist(): Promise<IArtist[]> {
    return this.prisma.artist.findMany();
  }

  createArtist(createArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.prisma.artist.create({ data: createArtistDto});
  }

  async getArtistsById(id: string): Promise<IArtist> {
    const artist = await this.prisma.artist.findUnique({
      where: {
        id
      }
    });

    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return artist;
  }

  async updateArtistById(updateArtistDto: UpdateArtistDto, id: string): Promise<IArtist> {
    const artist = await this.prisma.artist.findUnique({
      where: {
        id
      }
    });

    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return this.prisma.artist.update({
      where: {
        id
      },
      data: {
        ...updateArtistDto,
        id
      }
    });
  }

  async deleteArtistById(id: string) {
    await this.prisma.artist.delete({
      where: {
        id
      }
    });
    return;
  }
}
