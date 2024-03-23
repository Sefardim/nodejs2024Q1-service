import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { TrackService } from './track.service';
import { ITrack } from './interfaces/track.interface';
import { CreateTrackDto } from './dto/create.track.dto';
import { UpdateTrackDto } from './dto/update.track.dto';

@Controller('track')
@ApiTags('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAllTrack(): Promise<ITrack[]> {
    return this.trackService.getAllTracks();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createTrack(@Body() createTrackDto: CreateTrackDto): Promise<ITrack> {
    return this.trackService.createTrack(createTrackDto);
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getTrackById(@Param('id', ParseUUIDPipe) id: string): Promise<ITrack> {
    return this.trackService.getTracksById(id);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateTrackById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTrackDto: UpdateTrackDto,
  ): Promise<ITrack> {
    return this.trackService.updateTrackById(updateTrackDto, id);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteTrackById(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.trackService.deleteTrackById(id);
  }
}
