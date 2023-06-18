import { Guestbook } from '@/entities/entity.guestbook';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}

  getAllGuestbookComments(): any {
    return this.guestbookRepository.find();
  }
}
