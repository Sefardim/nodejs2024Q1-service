import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { TrackService } from './track.service';
import { ITrack } from './interfaces/track.interface';
import { CreateTrackDto } from './dto/create.track.dto';
import { UpdateTrackDto } from './dto/update.track.dto';
import { Track } from '../../common/decorators/track.decorator';

@Controller('track')
@ApiTags('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getAllTrack(): ITrack[] {
    return this.trackService.getAllTracks();
  }

  @Post()
  createTrack(@Body() createTrackDto: CreateTrackDto): ITrack {
    return this.trackService.createTrack(createTrackDto);
  }

  @Get(':id')
  getTrackById(@Track() track: ITrack): ITrack {
    return this.trackService.getTracksById(track);
  }

  @Put(':id')
  updateTrackById(
    @Track() track: ITrack,
    @Body() updateTrackDto: UpdateTrackDto,
  ): ITrack {
    return this.trackService.updateTrackById(updateTrackDto, track.id);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteTrackById(@Track() track: ITrack): void {
    return this.trackService.deleteTrackById(track.id);
  }
}
