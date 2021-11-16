import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  res_id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.services)
  @JoinColumn([{ name: 'res_id', referencedColumnName: 'id' }])
  restaurant: Restaurant;
}
