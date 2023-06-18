import { Controller, Get, Header } from '@nestjs/common';

import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  getAlbums() {
    return this.albumsService.getAlbums();
  }
}
