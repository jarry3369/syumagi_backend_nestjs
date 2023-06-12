import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('album', { schema: 'public' })
export class Album {
  @PrimaryColumn('text', { name: 'title' })
  title: string | null;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;

  @Column('date', { name: 'release_date', nullable: true })
  releaseDate: string | null;

  @Column('text', { name: 'cover', nullable: true })
  cover: string | null;
}
