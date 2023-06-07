import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from 'src/entities/entity.song';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [MusicsController],
  providers: [MusicsService],
})
export class MusicsModule {}
