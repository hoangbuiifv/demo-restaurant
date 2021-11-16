import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Service } from 'src/services/entities/service.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string;

  @OneToMany(() => Service, (service) => service.restaurant, {
    cascade: ['insert', 'update'],
  })
  services: Service[];
}
