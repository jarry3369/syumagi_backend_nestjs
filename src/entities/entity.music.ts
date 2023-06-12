import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('music', { schema: 'public' })
export class Music {
  @PrimaryColumn('text', { name: 'name' })
  name: string | null;

  @Column('text', { name: 'name_translated', nullable: true })
  nameTranslated: string | null;

  @Column('date', { name: 'release_date', nullable: true })
  releaseDate: string | null;

  @Column('text', { name: 'featuring', nullable: true })
  featuring: string | null;

  @Column('text', { name: 'cover', nullable: true })
  cover: string | null;

  @Column('text', { name: 'album', nullable: true })
  album: string | null;
}
