import { Injectable } from '@nestjs/common';

import {
  createTrack,
  deleteTrackById,
  TracksDb,
  updateTrackById,
} from '../../database/traks';
import { ITrack } from './interfaces/track.interface';
import { CreateTrackDto } from './dto/create.track.dto';
import { UpdateTrackDto } from './dto/update.track.dto';

@Injectable()
export class TrackService {
  getAllTracks(): ITrack[] {
    return TracksDb;
  }

  createTrack(createTrackDto: CreateTrackDto) {
    return createTrack(createTrackDto);
  }

  getTracksById(track: ITrack) {
    return track;
  }
  updateTrackById(updateTrackDto: UpdateTrackDto, id: string) {
    return updateTrackById(updateTrackDto, id);
  }

  deleteTrackById(id: string) {
    return deleteTrackById(id);
  }
}
