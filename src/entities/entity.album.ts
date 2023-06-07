import { Column, Entity, OneToMany } from 'typeorm';
import { Song } from './entity.song';

@Entity('album', { schema: 'syumagi' })
export class Album {
  @Column('varchar', { primary: true, name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'type', length: 10, default: () => "'single'" })
  type: string;

  @Column('date', { name: 'release_date', nullable: true })
  releaseDate: string | null;

  @Column('mediumtext', { name: 'cover' })
  cover: string;

  @OneToMany(() => Song, (song) => song.album2)
  songs: Song[];
}
