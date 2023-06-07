import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Album } from './entity.album';

@Index('asdf_idx', ['album'], {})
@Entity('song', { schema: 'syumagi' })
export class Song {
  @Column('varchar', { primary: true, name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'name_translated', nullable: true, length: 255 })
  nameTranslated: string | null;

  @Column('date', { name: 'release_date', nullable: true })
  releaseDate: string | null;

  @Column('varchar', { name: 'featuring', nullable: true, length: 16 })
  featuring: string | null;

  @Column('mediumtext', { name: 'cover', nullable: true })
  cover: string | null;

  @Column('varchar', { name: 'album', nullable: true, length: 255 })
  album: string | null;

  @ManyToOne(() => Album, (album) => album.songs, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'album', referencedColumnName: 'title' }])
  album2: Album;
}
