import { Controller, Get } from '@nestjs/common';

import { MusicsService } from './musics.service';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get()
  getMusics() {
    return this.musicsService.getMusics();
  }
}
