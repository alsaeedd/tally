import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  image_path: string;

  @Column('decimal')
  amount: number;

  @Column()
  vendor: string;

  @Column('date')
  date: Date;

  @Column()
  category: string;
}
