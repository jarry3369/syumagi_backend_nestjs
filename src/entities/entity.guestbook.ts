import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('guestbook', { schema: 'public' })
export class Guestbook {
  @PrimaryColumn('text', { name: 'user_name' })
  name: string | null;

  @Column('text', { name: 'comment' })
  comment: string;
}
