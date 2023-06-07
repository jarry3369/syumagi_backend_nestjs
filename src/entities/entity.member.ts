import { Column, Entity } from 'typeorm';

@Entity('members', { schema: 'syumagi' })
export class Members {
  @Column('varchar', { primary: true, name: 'name', length: 16 })
  name: string;

  @Column('varchar', { name: 'position', length: 255 })
  position: string;

  @Column('timestamp', {
    name: 'create_time',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date | null;
}
