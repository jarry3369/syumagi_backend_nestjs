import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Music } from '@entity/entity.music';

@Injectable()
export class MusicsService {
  constructor(
    @InjectRepository(Music)
    private musicsRepository: Repository<Music>,
  ) {}

  getMusics(): any {
    return this.musicsRepository.find();
  }
}
