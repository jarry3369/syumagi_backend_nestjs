import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guestbook } from '@/entities/entity.guestbook';

@Module({
  imports: [TypeOrmModule.forFeature([Guestbook])],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
