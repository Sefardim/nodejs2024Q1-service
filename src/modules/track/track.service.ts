import { Injectable, NotFoundException } from '@nestjs/common';

import { ITrack } from './interfaces/track.interface';
import { CreateTrackDto } from './dto/create.track.dto';
import { UpdateTrackDto } from './dto/update.track.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TrackService {
  constructor(private readonly prisma: PrismaService) {}
  getAllTracks(): Promise<ITrack[]> {
    return this.prisma.track.findMany();
  }

  createTrack(createTrackDto: CreateTrackDto) {
    return this.prisma.track.create({
      data: {
        ...createTrackDto,
      },
    });
  }

  async getTracksById(id: string) {
    const track = await this.prisma.track.findUnique({
      where: {
        id,
      },
    });

    if (!track) {
      throw new NotFoundException('Track not found');
    }

    return track;
  }

  async updateTrackById(updateTrackDto: UpdateTrackDto, id: string) {
    const track = await this.prisma.track.findUnique({
      where: {
        id,
      },
    });

    if (!track) {
      throw new NotFoundException('Track not found');
    }

    return this.prisma.track.update({
      where: {
        id,
      },
      data: {
        ...updateTrackDto,
        id,
      },
    });
  }

  async deleteTrackById(id: string) {
    const track = await this.prisma.track.findUnique({
      where: {
        id,
      },
    });

    if (!track) {
      throw new NotFoundException('Track not found');
    }

    await this.prisma.track.delete({
      where: {
        id,
      },
    });

    const favorites = await this.prisma.favorites.findFirst();

    await this.prisma.favorites.update({
      where: {
        id: favorites.id,
      },
      data: {
        tracks: {
          set: favorites.tracks.filter((ids) => ids !== id),
        },
      },
    });

    return;
  }
}
