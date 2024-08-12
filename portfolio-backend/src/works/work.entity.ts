import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  clientUrl: string;

  @Column({ type: 'boolean', default: true })
  status: boolean; // true pentru visible, false pentru hidden
}
