import { Injectable, NotFoundException } from '@nestjs/common';

import { IAlbum } from './interfaces/album.interface';
import { CreateAlbumDto } from './dto/create.album.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor (private readonly prisma: PrismaService) {}
  getAllAlbums(): Promise<IAlbum[]> {
    return this.prisma.album.findMany();
  }

  createAlbum(createAlbumDto: CreateAlbumDto): Promise<IAlbum> {
    return this.prisma.album.create({
      data: {
        ...createAlbumDto
      }
    });
  }

  async getAlbumById(id: string): Promise<IAlbum> {
    const album = await this.prisma.album.findUnique({
      where: {
        id
      }
    });

    if (!album) {
      throw new NotFoundException('Album not found');
    }

    return album;
  }

  async updateAlbumById(updateAlbumDto: CreateAlbumDto, id: string): Promise<IAlbum> {
    const album = await this.prisma.album.findUnique({
      where: {
        id
      }
    });

    if (!album) {
      throw new NotFoundException('Album not found');
    }

    return this.prisma.album.update({
      where: {
        id
      },
      data: {
        ...updateAlbumDto,
        id
      }
    });
  }

  async deleteAlbumById(id: string): Promise<void> {
    await this.prisma.album.delete({
      where: {
        id
      }
    });
    return;
  }
}
