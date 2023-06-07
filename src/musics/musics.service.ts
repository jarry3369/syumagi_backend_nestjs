import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from 'src/entities/entity.song';

@Injectable()
export class MusicsService {
  constructor(
    @InjectRepository(Song)
    private musicsRepository: Repository<Song>,
  ) {}
}
