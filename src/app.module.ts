import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [RestaurantModule, ServicesModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, RestaurantModule],
})
export class AppModule {}
