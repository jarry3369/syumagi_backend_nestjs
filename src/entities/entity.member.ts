import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('member', { schema: 'public' })
export class Member {
  @PrimaryColumn('text', { name: 'name' })
  name: string | null;

  @Column('text', { name: 'position', nullable: true })
  position: string | null;

  @Column('timestamp without time zone', {
    name: 'create_time',
    nullable: true,
  })
  createTime: Date | null;
}
