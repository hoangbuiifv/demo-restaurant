import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private resRepository: Repository<Restaurant>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    return await this.resRepository.save(createRestaurantDto);
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.resRepository.find();
  }

  async findOne(id: number) {
    return await this.resRepository.findOne(id);
  }

  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<UpdateResult> {
    return await this.resRepository.update(id, updateRestaurantDto);
  }
}
