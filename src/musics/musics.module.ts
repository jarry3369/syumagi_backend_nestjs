import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Music } from '@entity/entity.music';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  controllers: [MusicsController],
  providers: [MusicsService],
})
export class MusicsModule {}
