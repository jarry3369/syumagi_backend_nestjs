import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Album } from '@entity/entity.album';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumsRepository: Repository<Album>,
  ) {}

  getAlbums(): Promise<
    Array<{
      cover: string;
      releaseDate: string;
      title: string;
      type: string;
    }>
  > {
    return this.albumsRepository.find();
  }
}
